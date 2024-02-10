import { IMAGE_BASE_URL_W500 } from "../../../config/ApiConstants";
import { Movie } from "../entities/Movie";

function MovieCard(props: { movie: Movie }) {
  const date = new Date(props.movie.release_date);
  const year = date.getFullYear();
  return (
    <div className={"flex flex-col w-[8rem]"}>
      <img
        alt="image"
        key={props.movie.id}
        src={`${IMAGE_BASE_URL_W500}${props.movie.poster_path}`}
        className={`rounded-xl border-2 border-transparent hover:scale-[1.2] h-[11rem] w-[8rem] hover:-translate-y-4 transition-transform duration-300 `}
      />
      <p
        className={
          "text-white text-sm font-medium tracking-wider mt-1 text-ellipsis whitespace-nowrap overflow-hidden"
        }
      >
        {props.movie.title}
      </p>
      <p className={"text-gray-400 text-xs"}>{year}</p>
    </div>
  );
}

export default MovieCard;
