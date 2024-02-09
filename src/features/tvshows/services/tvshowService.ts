import {
  API_KEY,
  BASE_URL,
  DISCOVER_TVSHOWS_ENDPOINT,
} from "../../../config/ApiConstants";
import { Trailer } from "../../movies/entities/Trailer";
import { TvShow } from "../entities/TvShow";



export async function fetchTvShows({ pageParam = 1 , targetEndpoint = DISCOVER_TVSHOWS_ENDPOINT}): Promise<TvShow[]> {
  const response = await fetch(
    `${BASE_URL}${targetEndpoint}api_key=${API_KEY}&page=${pageParam}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch tv shows");
  }
  const data = await response.json();
  const tvShows = data.results;
  console.log(tvShows);
  return tvShows;
}

export async function fetchTvShowTrailer(seriesId: number): Promise<Trailer> {
  const response = await fetch(
    `https://api.themoviedb.org/3/tv/${seriesId}/videos?api_key=${API_KEY}`
  );
  console.log(response);
  if (!response.ok) {
    throw new Error("Failed to fetch trailer");
  }
  const data = await response.json();
  console.log(data);
  let trailers : Trailer[] = data.results;
  
  trailers = trailers.filter((trailer: Trailer) => trailer.type == "Trailer");
  const trailer = trailers.filter((trailer:Trailer)=> trailer.name == "Official Trailer");
  if(!trailer){
    return trailer;
  }else{
    return trailers[trailers.length - 1];
  }
}
