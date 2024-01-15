import MovieBackdrop from "./MovieBackdrop";
import MoviesCarousel from "./MoviesCarousel";
import { useEffect, useState } from "react";
import { useMovies } from "../hooks/useMovies";
import Loader from "../../../ui/Loader";

function DiscoverMovies() {
  const [currentBackdrop, setCurrentBackdrop] = useState("");
  const [activeMovie, setActiveMovie] = useState(0);

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
    return <Loader />;
  }

  return (
    <MovieBackdrop
      activeMovie={moviesQuery.data![activeMovie]}
      backdropImage={currentBackdrop}
    >
      <MoviesCarousel
        movies={moviesQuery.data!}
        setActiveMovie={(index) => setActiveMovie(index)}
        setBackdrop={(image: string) => setCurrentBackdrop(image)}
      ></MoviesCarousel>
    </MovieBackdrop>
  );
}
export default DiscoverMovies;
