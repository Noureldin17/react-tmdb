import {
  API_KEY,
  BASE_URL,
  DISCOVER_MOVIES_ENDPOINT,
} from "../../../config/ApiConstants";
import { Movie } from "../entities/Movie";
import { Trailer } from '../entities/Trailer';

export async function fetchMovies({ pageParam = 1 }): Promise<Movie[]> {
  const response = await fetch(
    `${BASE_URL}${DISCOVER_MOVIES_ENDPOINT}api_key=${API_KEY}&page=${pageParam}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch movies");
  }
  const data = await response.json();
  const movies = data.results;
  return movies;
}

export async function fetchMovieTrailer(movieId: number): Promise<Trailer> {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${API_KEY}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch trailer");
  }

  const data = await response.json();
  let trailers : Trailer[] = data.results;

  trailers = trailers.filter((trailer: Trailer) => trailer.type == "Trailer");
  const trailer = trailers.filter((trailer:Trailer)=> trailer.name == "Official Trailer");
  if(!trailer){
    return trailer;
  }else{
    return trailers[trailers.length - 1];
  }
}
