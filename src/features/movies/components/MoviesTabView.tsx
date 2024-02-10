import { useState } from "react";
import {
  POPULAR_MOVIES_ENDPOINT,
  TOPRATED_MOVIES_ENDPOINT,
  UPCOMING_MOVIES_ENDPOINT,
} from "../../../config/ApiConstants";
import { useMovies } from "../hooks/useMovies";
import MovieCard from "./MovieCard";

function MoviesTabView() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [currentEndpoint, setCurrentEndpoint] = useState(
    POPULAR_MOVIES_ENDPOINT
  );
  const movies = useMovies(currentEndpoint);

  return (
    <div className={"flex flex-col items-center gap-10 justify-center mt-10"}>
      <div
        className={
          "mx-4 select-none  w-[90%] font-medium justify-evenly sm:w-fit flex rounded-full text-sm sm:text-lg text-center text-white border-darkerRed border-2 bg-darkerRed"
        }
      >
        <div
          onClick={() => {
            setSelectedIndex(0);
            setCurrentEndpoint(POPULAR_MOVIES_ENDPOINT);
          }}
          className={`w-[8rem] ${
            selectedIndex == 0 ? "bg-white text-primaryDark" : "bg-transparent"
          } hover:bg-white hover:text-primaryDark transition-all transform duration-300 text-center rounded-full px-2.5 py-1`}
        >
          Popular
        </div>
        <div
          onClick={() => {
            setSelectedIndex(1);
            setCurrentEndpoint(TOPRATED_MOVIES_ENDPOINT);
          }}
          className={`w-[8rem] ${
            selectedIndex == 1 ? "bg-white text-primaryDark" : "bg-transparent"
          } hover:bg-white hover:text-primaryDark transition-all transform duration-300 text-center rounded-full px-2.5 py-1`}
        >
          Top Rated
        </div>
        <div
          onClick={() => {
            setSelectedIndex(2);
            setCurrentEndpoint(UPCOMING_MOVIES_ENDPOINT);
          }}
          className={`w-[8rem] ${
            selectedIndex == 2 ? "bg-white text-primaryDark" : "bg-transparent"
          } hover:bg-white hover:text-primaryDark transition-all transform duration-300 text-center rounded-full px-2.5 py-1`}
        >
          Upcoming
        </div>
      </div>
      {movies.isLoading && (
        <div className={"flex items-center justify-center"}>
          <div className={"loader"}></div>
        </div>
      )}
      {movies.isError && (
        <div className={"w-full mt-16  flex items-center justify-center"}>
          <div className={"loader"}></div>
        </div>
      )}
      <div
        className={
          "grid md:grid-cols-4 md:grid-rows-5 md:gap-10 md:gap-x-20 grid-cols-2 grid-rows-10 gap-x-10 gap-y-10"
        }
      >
        {!movies.isError &&
          !movies.isLoading &&
          movies.data?.map((item) => <MovieCard movie={item} />)}
      </div>
      <button
        className={
          "text-white mb-10 border-primaryRed border-2 py-2 px-4 rounded-full hover:scale-110 transition-all duration-300"
        }
      >
        Show More...
      </button>
    </div>
  );
}

export default MoviesTabView;
