import { useQuery } from "@tanstack/react-query";
import { fetchMovies } from "../services/moviesService";

export function useMovies(){
    return useQuery({
        queryKey: ["movies"],
        queryFn: () => fetchMovies({ pageParam: 1 }),
        staleTime: 1000 * 60 * 60 * 60,
      });
}