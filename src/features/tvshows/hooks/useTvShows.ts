import { useQuery } from "@tanstack/react-query";
import { fetchTvShows } from "../services/tvshowService";

export default function useTvShows(){
    return useQuery({
        queryKey: ["tvshows"],
        queryFn: () => fetchTvShows({ pageParam: 1 }),
        staleTime: 1000 * 60 * 60 * 60,
      });
}