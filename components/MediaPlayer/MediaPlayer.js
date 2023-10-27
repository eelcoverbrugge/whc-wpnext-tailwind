import React from "react";
import DisplayTrack from "./DisplayTrack";
import Controls from "./Controls";
import ProgressBar from "./ProgressBar";
import { tracks } from "./tracks";

export const MediaPlayer = () => {
  const [trackIndex, setTrackIndex] = React.useState(0);
  const [currentTrack, setCurrentTrack] = React.useState(
    tracks[trackIndex]
  );
  const [timeProgress, setTimeProgress] = React.useState(0);
  const [duration, setDuration] = React.useState(0);

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
  const [randomized, setRandomized] = React.useState(false);

  React.useEffect(() => {
    handleNext();
  }, []);

  return (
    <div className="bg-azureishWhite">
      <div className="max-w-[1200px] mx-auto my-0 p-5">
        <DisplayTrack
          currentTrack={currentTrack}
          audioRef={audioRef}
          setDuration={setDuration}
          progressBarRef={progressBarRef}
          handleNext={handleNext}
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
