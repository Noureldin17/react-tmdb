import { ReactNode } from "react";
import { IMAGE_BASE_URL_ORIGINAL } from "../../../config/ApiConstants";

interface MovieBackropProps {
  backdropImage: string;
  children: ReactNode;
}

function MovieBackdrop(props: MovieBackropProps) {
  return (
    <div className="absolute w-full h-[32rem] select-none">
      <div
        style={{
          background:
            "linear-gradient(to right, #080e12FF ,#080e12F2,#080e12F0,#080e12D8,#080e12CB,#080e12BE,#080e12B1,#080e12A4,#080e1297,#080e128A,#080e1288,#080e125A)",
        }}
        className="absolute w-full inset-0 opacity-90"
      ></div>
      <div
        style={{
          background:
            "linear-gradient(to top, #080e12FF,#080e12D0,transparent)",
        }}
        className="absolute h-[30%] inset-y-[70%] inset-x-0  opacity-100"
      ></div>

      <div
        className={"absolute  flex flex-col justify-between h-[16rem] w-full"}
      >
        <div className=" p-4 text-white">
          <h2 className="text-2xl font-bold">Movie Title</h2>
          <p className="text-sm">
            Movie Description Lorem ipsum dolor sit amet, consectetur adipiscing
            elit.
          </p>
        </div>

        {props.children}
      </div>
      <img
        className=" object-cover md:object-cover h-full w-full"
        src={`${IMAGE_BASE_URL_ORIGINAL}${props.backdropImage}`}
        alt="Movie Poster"
      />
    </div>
  );
}
export default MovieBackdrop;
