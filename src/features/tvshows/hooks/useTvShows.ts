import { useQuery } from "@tanstack/react-query";
import { fetchTvShows } from "../services/tvshowService";

export default function useTvShows(targetEndpoint?:string) {
  return useQuery({
    queryKey: ["tvshows",targetEndpoint],
    queryFn: () => fetchTvShows({ pageParam: 1 , targetEndpoint: targetEndpoint}),
    staleTime: 1000 * 60 * 60 * 60,
  });
}
