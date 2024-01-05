import { useState } from "react";
import { IMAGE_BASE_URL_W500 } from "../../../config/ApiConstants";
import { Movie } from "../entities/Movie";
import { useClickOutside } from "@mantine/hooks";
type CarouselProps = {
  movies: Movie[];
  setBackdrop: (image: string) => void;
};
function MoviesCarousel(props: CarouselProps) {
  const [selectedImage, setSelectedImage] = useState(-1);

  const ref = useClickOutside(() => setSelectedImage(-1));

  const movies = props.movies;

  function handleImageClick(index: number) {
    setSelectedImage(index);
    props.setBackdrop(props.movies[index].backdrop_path);
  }
  return (
    <div ref={ref}>
      <div
        className={
          "absolute -scroll-my-40  px-4 overflow-x-scroll flex w-[100%] h-[16rem] gap-6 pt-10 scroll-mx-[18rem] scroll-smooth snap-both"
        }
      >
        {movies.map((item, index) => (
          <img
            alt="image"
            key={index}
            src={`${IMAGE_BASE_URL_W500}${item.poster_path}`}
            className={`rounded-xl border-2 border-transparent hover:scale-[1.2] h-[11rem] w-[8rem] hover:-translate-y-4 transition-transform duration-300 ${
              selectedImage === index
                ? "transform -translate-y-4 scale-[1.2] border-2 border-white"
                : ""
            }`}
            onClick={() => handleImageClick(index)}
            onMouseOver={() => props.setBackdrop(movies[index].backdrop_path)}
            onMouseLeave={() => {
              if (selectedImage != -1) {
                props.setBackdrop(movies[selectedImage].backdrop_path);
              }
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default MoviesCarousel;
