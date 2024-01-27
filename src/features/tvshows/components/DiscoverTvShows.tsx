import { useState } from "react";
import useTvShows from "../hooks/useTvShows";
import TvShowCard from "./TvShowCard";
import TvShowsTabs from "./TvShowsTabs";

function DiscoverTvShows() {
  const [selectedIndex, setSelected] = useState(0);
  const tvshows = useTvShows();
  if (tvshows.isLoading) {
    return <></>;
  }
  return (
    <div className={"relative h-[24rem] w-full bg-secondaryDark mt-16"}>
      <div className="absolute w-full h-[10rem] bg-gradient-to-b from-primaryDark to-transparent  inset-0 opacity-90"></div>
      <div className="absolute w-full h-[10rem] bg-gradient-to-t from-primaryDark to-transparent bottom-0 inset-100 opacity-90"></div>
      <div className={'absolute w-full'}>
        <h1 className={" ms-4 mb-6 text-white text-[1.8rem] font-bold "}>
          Tv Shows
        </h1>
        <TvShowsTabs selectedIndex={selectedIndex} onClick={setSelected}/>
        <div className="flex mt-6 h-[22rem] w-full p-5 overflow-x-scroll gap-8">
          {tvshows.data!.map((tvshow, index) => (
            <TvShowCard key={index} tvshow={tvshow} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default DiscoverTvShows;
