import { useRef, useState } from "react";
import { IMAGE_BASE_URL_W500 } from "../../../config/ApiConstants";
import { Movie } from "../entities/Movie";
import { ArrowLeftRounded, ArrowRightRounded } from "@mui/icons-material";
import { useClickOutside } from '@mantine/hooks';
type CarouselProps = {
  movies: Movie[];
  setBackdrop: (image: string) => void;
  setActiveMovie: (index: number) => void;
};
function MoviesCarousel(props: CarouselProps) {
  const [selectedImage, setSelectedImage] = useState(-1);
  const [arrowVisible, setarrowVisible] = useState(false);

  const ref = useClickOutside(() => setSelectedImage(-1));
  const carouselRef = useRef<HTMLDivElement>(null);
  const movies = props.movies;

  function scrollLeft(){
    carouselRef.current!.scrollLeft = carouselRef.current!.scrollLeft - 500;
  }
  function scrollRight(){
    carouselRef.current!.scrollLeft = carouselRef.current!.scrollLeft + 500;
  }

  function handleImageClick(index: number) {
    props.setActiveMovie(index);
    setSelectedImage(index);
    props.setBackdrop(props.movies[index].backdrop_path);
  }
  return (
    <div
      onMouseEnter={() => setarrowVisible(true)}
      onMouseLeave={() => setarrowVisible(false)}
      ref={ref}
      className=" flex items-center"
    >
      {arrowVisible && (
        <div
        onClick={scrollLeft}
          className={
            "text-white absolute  start-1 z-10 text-5xl bg-primaryDarkTransparency rounded-full transition-all transform duration-700"
          }
        >
          <ArrowLeftRounded fontSize="inherit" />
        </div>
      )}
      <div
        ref={carouselRef}
        className={
          "-scroll-my-40 items-center px-4 overflow-x-scroll flex w-[100%] h-[16rem] gap-8 scroll-mx-[18rem] scroll-smooth snap-both"
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
      {arrowVisible && (
        <div
        onClick={scrollRight}
          className={
            "text-white absolute end-1 z-10 text-5xl bg-primaryDarkTransparency rounded-full transition-all transform duration-700"
          }
        >
          <ArrowRightRounded fontSize="inherit" />
        </div>
      )}
    </div>
  );
}

export default MoviesCarousel;
