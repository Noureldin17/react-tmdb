import { PlayArrowRounded, StarRounded } from "@mui/icons-material";
import { IMAGE_BASE_URL_W500 } from "../../../config/ApiConstants";
import { TvShow } from "../entities/TvShow";
import { Rating } from "@mui/material";
import { useState } from "react";
function TvShowCard(props: { tvshow: TvShow }) {
  const date = new Date(props.tvshow.first_air_date);
  const year = date.getFullYear();
  const [playButtonVisible, setPlayButtonVisible] = useState(false);
  const [labelVisible, setLabelVisible] = useState(false);
  return (
    <div
      onMouseLeave={() => setPlayButtonVisible(false)}
      onMouseEnter={() => setPlayButtonVisible(true)}
      className={
        "relative tranform duration-300 hover:scale-[1.1] bg-primaryDark w-[22rem] h-[12rem] text-5xl rounded-xl flex-none justify-center flex items-center cursor-pointer"
      }
    >
      {playButtonVisible && (
        <div
          className={
            "absolute z-30 flex flex-col h-[100%] mb-6 items-center justify-center"
          }
        >
          <div
            onMouseLeave={() => setLabelVisible(false)}
            onMouseEnter={() => setLabelVisible(true)}
            className={
              " flex items-center text-white  rounded-full text-center bg-primaryDarkTransparency w-[3rem] h-[3rem]"
            }
          >
            <PlayArrowRounded fontSize="inherit" />
          </div>
          <p className={`${labelVisible ? 'text-gray-200' : 'text-transparent'} text-xs font-medium transform transition-all duration-300 tracking-wider`}>Play Trailer</p>
        </div>
      )}

      <div className="absolute flex flex-col justify-end px-3 py-3 z-20 h-[100%] w-[100%] bg-gradient-to-t from-primaryDark to-transparent bottom-0  opacity-100 rounded-xl">
        <h1 className={"text-white text-base font-medium"}>
          {props.tvshow.name}
        </h1>
        <p className={"text-gray-300 text-sm"}>{year}</p>
        <Rating
          className={""}
          precision={0.5}
          emptyIcon={
            <StarRounded fontSize="small" className={"text-primaryGray"} />
          }
          icon={<StarRounded fontSize="small" />}
          readOnly
          value={props.tvshow.vote_average / 2}
        />
      </div>

      <img
        className={"absolute w-[22rem] h-[12rem] rounded-xl"}
        src={IMAGE_BASE_URL_W500 + props.tvshow.backdrop_path}
      />
    </div>
  );
}

export default TvShowCard;
