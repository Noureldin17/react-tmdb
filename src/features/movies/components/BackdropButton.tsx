import { Bookmark, PlayArrow } from "@mui/icons-material";

interface BackdropButtonProps {
  onPlayTrailer: () => void,
  onAddToWatchList: () => void,
}

function BackdropButton(props : BackdropButtonProps) {
  return (
    <div className={'mt-3'}>
      <button onClick={props.onPlayTrailer} className={"text-white bg-darkerRed px-3 py-2"}>
        <PlayArrow ></PlayArrow>
      </button>
      <button className={"text-white bg-redButtonHover px-3 py-2"}>
        <Bookmark></Bookmark>
      </button>
    </div>
  );
}
export default BackdropButton;
