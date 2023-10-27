import React, { useState, useRef, useCallback, useEffect } from 'react';

import {
  IoPlayBackCircle,
  IoPlayForwardCircle,
  IoPlaySkipBackCircle,
  IoPlaySkipForwardCircle,
  IoPlayCircle,
  IoPauseCircle,
} from 'react-icons/io5';

import {
  IoMdVolumeHigh,
  IoMdVolumeOff,
  IoMdVolumeLow,
} from 'react-icons/io';

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
  displayNone,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(60);
  const [muteVolume, setMuteVolume] = useState(false);

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

  useEffect(() => {
    if (audioRef) {
      audioRef.current.volume = volume / 100;
      audioRef.current.muted = muteVolume;
    }
  }, [volume, audioRef, muteVolume]);

  return (
    <div className="flex w-[100px] md:w-[200px] items-center my-2 justify-center">
      <div className="flex gap-1 md:gap-2">
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
      {/*<div className="flex items-center w-[100px]">*/}
      {/*  <button onClick={() => setMuteVolume(!muteVolume)}>*/}
      {/*    {muteVolume || volume < 5 ? (*/}
      {/*      <IoMdVolumeOff />*/}
      {/*    ) : volume < 40 ? (*/}
      {/*      <IoMdVolumeLow />*/}
      {/*    ) : (*/}
      {/*      <IoMdVolumeHigh />*/}
      {/*    )}*/}
      {/*  </button>*/}
      {/*  <input*/}
      {/*    type="range"*/}
      {/*    min={0}*/}
      {/*    max={100}*/}
      {/*    value={volume}*/}
      {/*    onChange={(e) => setVolume(e.target.value)}*/}
      {/*    style={{*/}
      {/*      background: `linear-gradient(to right, #f50 ${volume}%, #ccc ${volume}%)`,*/}
      {/*    }}*/}
      {/*  />*/}
      {/*</div>*/}
    </div>
  );
};

export default Controls;
