import React from "react";
import DisplayTrack from "./DisplayTrack";
import Controls from "./Controls";
import ProgressBar from "./ProgressBar";
import { tracks } from "./tracks";
import { IoChevronDownOutline, IoChevronUpOutline, IoCloseCircleOutline } from "react-icons/io5";

export const MediaPlayer = ({ className }) => {
  const [trackIndex, setTrackIndex] = React.useState(0);
  const [currentTrack, setCurrentTrack] = React.useState(
    tracks[trackIndex]
  );
  const [timeProgress, setTimeProgress] = React.useState(0);
  const [duration, setDuration] = React.useState(0);
  const [minimalize, setMinimalize] = React.useState(false);

  const audioRef = React.useRef();
  const progressBarRef = React.useRef();

  const handleNext = () => {
    if (trackIndex >= tracks.length - 1) {
      setTrackIndex(0);
      setCurrentTrack(tracks[0]);
    } else {
      setTrackIndex((prev) => prev + 1);
      setCurrentTrack(tracks[trackIndex + 1]);
    }
  };

  React.useEffect(() => {
    handleNext();
  }, []);

  const toggleMinimalize = () => {
    setMinimalize(!minimalize);
  }

  return (
    <div className={`${className} bg-azureishWhite`}>
      <div className="w-[600px] p-5">
        <div className="w-full flex justify-end gap-2">
          <button onClick={toggleMinimalize}>{minimalize ? <IoChevronUpOutline /> : <IoChevronDownOutline />}</button>
        </div>
        <DisplayTrack
          currentTrack={currentTrack}
          audioRef={audioRef}
          setDuration={setDuration}
          progressBarRef={progressBarRef}
          handleNext={handleNext}
          minimalize={minimalize}
        />
        <Controls
          audioRef={audioRef}
          progressBarRef={progressBarRef}
          duration={duration}
          setTimeProgress={setTimeProgress}
          tracks={tracks}
          trackIndex={trackIndex}
          setTrackIndex={setTrackIndex}
          setCurrentTrack={setCurrentTrack}
          handleNext={handleNext}
          minimalize={minimalize}
        />
        <ProgressBar
          progressBarRef={progressBarRef}
          audioRef={audioRef}
          timeProgress={timeProgress}
          duration={duration}
        />
      </div>
    </div>
  );
};
