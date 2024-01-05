import {
  API_KEY,
  BASE_URL,
  DISCOVER_MOVIES_ENDPOINT,
} from "../../../config/ApiConstants";
import { Movie } from "../entities/Movie";

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
