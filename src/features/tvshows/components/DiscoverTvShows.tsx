import { useState } from "react";
import useTvShows from "../hooks/useTvShows";
import TvShowCard from "./TvShowCard";
import TvShowsTabs from "./TvShowsTabs";
import { Snackbar } from "@mui/material";
import YouTubePlayer from "react-player/youtube";
import { CloseRounded, ErrorOutline } from "@mui/icons-material";
import { fetchTvShowTrailer } from "../services/tvshowService";
import { AIRING_TODAY_TVSHOWS_ENDPOINT } from "../../../config/ApiConstants";

function DiscoverTvShows() {
  const [selectedIndex, setSelected] = useState(0);
  const [trailerVisible, setTrailerVisible] = useState(false);
  const [trailer, setTrailer] = useState("");
  const [currentEndpoint, setCurrentEndpoint] = useState(
    AIRING_TODAY_TVSHOWS_ENDPOINT
  );
  const [snackBarOpen, setSnackBarOpen] = useState(false);

  const tvshows = useTvShows(currentEndpoint);
  if (tvshows.isLoading) {
    return <></>;
  }
  return (
    <div className={"relative h-[24rem] w-full bg-secondaryDark mt-16"}>
      <div className="absolute w-full h-[10rem] bg-gradient-to-b from-primaryDark to-transparent  inset-0 opacity-90"></div>
      <div className="absolute w-full h-[10rem] bg-gradient-to-t from-primaryDark to-transparent bottom-0 inset-100 opacity-90"></div>
      <div className={"absolute w-full"}>
        <div className="flex justify-between ms-4 mb-6 me-4">
          <h1 className={"  text-white text-[1.8rem] font-bold "}>Tv Shows</h1>
          <button className="bg-white rounded-full h-fit px-4 py-2 text-md font-semibold active:scale-95">
            Show More
          </button>
        </div>
        <TvShowsTabs
          setEndpoint={setCurrentEndpoint}
          selectedIndex={selectedIndex}
          onClick={setSelected}
        />
        <div className="flex mt-6 h-[22rem] w-full p-5 overflow-x-scroll gap-8">
          {tvshows.data?.map((tvshow, index) => {
            return (
              <TvShowCard
                onClickPlay={async () => {
                  try {
                    const trailer = await fetchTvShowTrailer(tvshow.id);
                    setTrailer(trailer.key);
                    setTrailerVisible(true);
                  } catch (e) {
                    setSnackBarOpen(true);
                  }
                }}
                key={index}
                tvshow={tvshow}
              />
            );
          })}
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
              <div className={"ps-1 gap-3 flex items-center justify-between"}>
                <div className={"h-[2.5rem] rounded-full bg-red-500 w-1"}></div>
                <ErrorOutline className={"text-red-500"} />
              </div>
              <span>
                <h2 className={"font-bold text-white tracking-widest"}>
                  Error
                </h2>
                <p className={"text-gray-200 text-sm font-thin tracking-wider"}>
                  Failed to fetch tv show trailer
                </p>
              </span>
            </div>
          </Snackbar>
        </div>
      </div>
      {trailerVisible && (
        <div
          className={
            "fixed inset-0  mx-auto justify-center w-full flex items-center bg-primaryDarkTransparency rounded-[12px] z-30"
          }
        >
          <div
            className={
              "text-white flex-col md:h-[85%] h-[17rem] flex w-full md:w-[70%] md:inset-0 items-end gap-4 p-2 rounded-[18px]  bg-black"
            }
          >
            <CloseRounded
              className={
                "text-gray-300 hover:text-white rounded-full p-0.4 hover:bg-gray-900"
              }
              onClick={() => setTrailerVisible(false)}
            />
            <YouTubePlayer
              playing
              controls
              width={"100%"}
              height={"100%"}
              url={`https://www.youtube.com/watch?v=${trailer}`}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default DiscoverTvShows;
