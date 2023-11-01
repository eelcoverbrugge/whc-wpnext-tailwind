import React, { useState, useEffect, useRef } from "react";
import DisplayTrack from "./DisplayTrack";
import Controls from "./Controls";
import ProgressBar from "./ProgressBar";
import { tracks } from "./tracks";
import { IoChevronDownOutline, IoChevronUpOutline } from "react-icons/io5";

export const MediaPlayer = () => {
  const [trackIndex, setTrackIndex] = useState(0);
  const [currentTrack, setCurrentTrack] = useState(tracks[trackIndex]);
  const [timeProgress, setTimeProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [minimalize, setMinimalize] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const audioRef = useRef();
  const progressBarRef = useRef();

  const handleNext = () => {
    if (trackIndex >= tracks.length - 1) {
      setTrackIndex(0);
      setCurrentTrack(tracks[0]);
    } else {
      setTrackIndex((prev) => prev + 1);
      setCurrentTrack(tracks[trackIndex + 1]);
    }
  };

  useEffect(() => {
    handleNext();

    const showDelay = 1000; // Adjust this as needed
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, showDelay);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const toggleMinimalize = () => {
    setMinimalize(!minimalize);
  };

  return (
    <div
      className={`fixed bottom-0 right-0 z-10 bg-azureishWhite transition-transform transform ${
        isVisible ? 'translate-x-0' : 'translate-x-full'
      } w-full md:w-[600px]`}
    >
      <div className="p-3">
        <DisplayTrack
          currentTrack={currentTrack}
          audioRef={audioRef}
          setDuration={setDuration}
          progressBarRef={progressBarRef}
          handleNext={handleNext}
          minimalize={minimalize}
        />
        <div className="w-full flex justify-start gap-2">
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
        <button className={"absolute top-2 right-0 p-3"} onClick={toggleMinimalize}>
          {minimalize ? <IoChevronUpOutline /> : <IoChevronDownOutline />}
        </button>
      </div>
    </div>
  );
};
