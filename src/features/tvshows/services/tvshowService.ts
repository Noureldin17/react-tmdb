import { API_KEY, BASE_URL, DISCOVER_TVSHOWS_ENDPOINT } from "../../../config/ApiConstants";
import { TvShow } from "../entities/TvShow";

export async function fetchTvShows({pageParam = 1}) : Promise<TvShow[]>{
    const response = await fetch(`${BASE_URL}${DISCOVER_TVSHOWS_ENDPOINT}api_key=${API_KEY}&page=${pageParam}`);
    if(!response.ok){
        throw new Error("Failed to fetch tv shows");
    }
    const data = await response.json();
    const tvShows = data.results;
    return tvShows;
} 