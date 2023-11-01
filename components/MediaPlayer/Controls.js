import React, { useState, useRef, useCallback, useEffect } from 'react';

import {
  IoPlayBackCircle,
  IoPlayForwardCircle,
  IoPlaySkipBackCircle,
  IoPlaySkipForwardCircle,
  IoPlayCircle,
  IoPauseCircle,
} from 'react-icons/io5';

const Controls = ({
  audioRef,
  progressBarRef,
  duration,
  setTimeProgress,
  tracks,
  trackIndex,
  setTrackIndex,
  setCurrentTrack,
  handleNext,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  const playAnimationRef = useRef();

  const repeat = useCallback(() => {
    const currentTime = audioRef.current ? audioRef.current.currentTime : 0;
    setTimeProgress(currentTime);
    if (progressBarRef.current) {
      progressBarRef.current.value = currentTime;
      progressBarRef.current.style.setProperty(
        '--range-progress',
        `${(progressBarRef.current.value / duration) * 100}%`
      );
    }

    playAnimationRef.current = requestAnimationFrame(repeat);
  }, [audioRef, duration, progressBarRef, setTimeProgress]);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
    playAnimationRef.current = requestAnimationFrame(repeat);
  }, [isPlaying, audioRef, repeat]);

  const skipForward = () => {
    audioRef.current.currentTime += 15;
  };

  const skipBackward = () => {
    audioRef.current.currentTime -= 15;
  };

  const handlePrevious = () => {
    if (trackIndex === 0) {
      let lastTrackIndex = tracks.length - 1;
      setTrackIndex(lastTrackIndex);
      setCurrentTrack(tracks[lastTrackIndex]);
    } else {
      setTrackIndex((prev) => prev - 1);
      setCurrentTrack(tracks[trackIndex - 1]);
    }
  };

  return (
    <div className="flex w-[100px] md:w-[200px] items-center my-2 justify-center">
      <div className="flex gap-0 md:gap-2">
        <button onClick={handlePrevious}>
          <IoPlaySkipBackCircle />
        </button>
        <button onClick={skipBackward}>
          <IoPlayBackCircle />
        </button>

        <button onClick={togglePlayPause}>
          {isPlaying ? <IoPauseCircle /> : <IoPlayCircle />}
        </button>
        <button onClick={skipForward}>
          <IoPlayForwardCircle />
        </button>
        <button onClick={handleNext}>
          <IoPlaySkipForwardCircle />
        </button>
      </div>
    </div>
  );
};

export default Controls;
