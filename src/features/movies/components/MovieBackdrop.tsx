import { ReactNode, useState } from "react";
import {
  IMAGE_BASE_URL_ORIGINAL,
  MOVIE_GENRES,
} from "../../../config/ApiConstants";
import { Movie } from "../entities/Movie";
import { Rating, Snackbar } from "@mui/material";
import { CloseRounded, ErrorOutline, StarRounded } from "@mui/icons-material";
import BackdropButton from "./BackdropButton";
import YouTubePlayer from "react-player/youtube";
import { fetchMovieTrailer } from "../services/moviesService";

interface MovieBackropProps {
  backdropImage: string;
  activeMovie: Movie;
  children: ReactNode;
}

function MovieBackdrop(props: MovieBackropProps) {
  const [trailerVisible, setTrailerVisible] = useState(false);
  const [snackBarOpen, setSnackBarOpen] = useState(false);
  const [trailer, setTrailer] = useState("");

  return (
    <div className="absolute w-full h-[32rem] select-none mt-[3.6rem]">
      <div
        style={{
          background:
            "linear-gradient(to right, #080e12FF ,#080e12F2,#080e12F0,#080e12D8,#080e12CB,#080e12BE,#080e12B1,#080e12A4,#080e1297,#080e128A,#080e1288,#080e125A)",
        }}
        className="absolute w-full inset-0 opacity-90"
      ></div>
      <div
        style={{
          background:
            "linear-gradient(to top, #080e12FF,#080e12D0,transparent)",
        }}
        className="absolute h-[30%] inset-y-[70%] inset-x-0  opacity-100"
      ></div>

      <div
        className={"absolute flex flex-col justify-between h-[16rem] w-full"}
      >
        <div className={"flex justify-between"}>
          <div className="p-4 text-white md:w-[50%]">
            <p className="text-[1.8rem] font-bold h-[4rem] flex-col flex justify-center">
              {props.activeMovie.title}
            </p>
            <div className="mt-5 flex items-center text-gray-300">
              {props.activeMovie.genre_ids.map((genre, index) => (
                <div key={index} className={"flex items-center"}>
                  <p>{MOVIE_GENRES[genre]}</p>
                  {index !== props.activeMovie.genre_ids.length - 1 && (
                    <div className="border-l border-gray-300 h-4 mx-2"></div>
                  )}
                </div>
              ))}
            </div>
            <Rating
              className={"mt-3"}
              precision={0.5}
              emptyIcon={<StarRounded className={"text-primaryGray"} />}
              icon={<StarRounded />}
              readOnly
              value={props.activeMovie.vote_average / 2}
            />
            <BackdropButton
              onAddToWatchList={() => {}}
              onPlayTrailer={async () => {
                try {
                  const trailer = await fetchMovieTrailer(props.activeMovie.id);
                  setTrailer(trailer.key);
                  setTrailerVisible(true);
                } catch (e) {
                  setSnackBarOpen(true);
                }
              }}
            />
            <p
              className={
                "text-sm mt-3 overflow-y-scroll text-gray-300 h-[3.5rem]"
              }
            >
              {props.activeMovie.overview}
            </p>
          </div>
          {trailerVisible && (
            <div
              className={
                "md:relative flex items-center justify-center absolute w-full md:w-[50%] md:h-[18rem] h-[90vh] md:px-12 md:py-8 md:bg-transparent bg-primaryDarkTransparency"
              }
            >
              <div
                className={
                  "text-white flex-col flex items-end mt-8 p-2 rounded-[12px] w-full bg-primaryDark"
                }
              >
                <CloseRounded onClick={() => setTrailerVisible(false)} />
                <YouTubePlayer
                  playing
                  controls
                  width={"100%"}
                  height={"17rem"}
                  url={`https://www.youtube.com/watch?v=${trailer}`}
                />
              </div>
            </div>
          )}
        </div>
        {props.children}
      </div>
      <img
        className=" object-cover md:object-cover h-full w-full"
        src={`${IMAGE_BASE_URL_ORIGINAL}${props.backdropImage}`}
        alt="Movie Poster"
      />
      <Snackbar
        className={"mt-[4rem] md:mt-[2.5rem]"}
        transitionDuration={300}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        autoHideDuration={3000}
        open={snackBarOpen}
        onClose={() => setSnackBarOpen(false)}
      >
        <div
          className={
            "bg-primaryDark w-[17rem] flex items-center justify-between pe-4 py-2 rounded-lg"
          }
        >
          <div className={'ps-1 gap-3 flex items-center justify-between'}>
            <div className={"h-[2.5rem] rounded-full bg-red-500 w-1"}></div>
            <ErrorOutline className={"text-red-500"} />
          </div>
          <span>
            <h2 className={"font-bold text-white tracking-widest"}>Error</h2>
            <p className={"text-gray-200 text-sm font-thin tracking-wider"}>
              Failed to fetch movie trailer
            </p>
          </span>
        </div>
      </Snackbar>
    </div>
  );
}
export default MovieBackdrop;
