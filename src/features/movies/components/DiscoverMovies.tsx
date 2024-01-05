import MovieBackdrop from "./MovieBackdrop";
import MoviesCarousel from "./MoviesCarousel";
import { useEffect, useState } from "react";
import { useMovies } from "../hooks/useMovies";

function DiscoverMovies() {
  const [currentBackdrop, setCurrentBackdrop] = useState("");

  const moviesQuery = useMovies();

  useEffect(() => {
    if (moviesQuery.data && moviesQuery.data.length > 0) {
      setCurrentBackdrop(moviesQuery.data[0].backdrop_path);
    }
  }, [moviesQuery.data]);

  if (moviesQuery.isError) {
    return <div></div>;
  }
  if (moviesQuery.isLoading) {
    return <div></div>;
  }

  return (
    <MovieBackdrop backdropImage={currentBackdrop}>
      <MoviesCarousel
        movies={moviesQuery.data!}
        setBackdrop={(image: string) => setCurrentBackdrop(image)}
      ></MoviesCarousel>
    </MovieBackdrop>
  );
}
export default DiscoverMovies;
