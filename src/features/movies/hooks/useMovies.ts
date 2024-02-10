import { useQuery } from "@tanstack/react-query";
import { fetchMovies } from "../services/moviesService";

export function useMovies(endpoint?:string){
    return useQuery({
        queryKey: ["movies",endpoint],
        queryFn: () => fetchMovies({ pageParam: 1 , targetEndpoint: endpoint}),
        staleTime: 1000 * 60 * 60 * 60,
      });
}