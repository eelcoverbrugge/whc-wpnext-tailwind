import React from "react";
const ProgressBar = ({
 progressBarRef,
 audioRef,
 timeProgress,
 duration,
}) => {
  const handleProgressChange = () => {
    audioRef.current.currentTime = progressBarRef.current.value;
  };

  const formatTime = (time) => {
    if (time && !isNaN(time)) {
      const minutes = Math.floor(time / 60);
      const formatMinutes =
        minutes < 10 ? `0${minutes}` : `${minutes}`;
      const seconds = Math.floor(time % 60);
      const formatSeconds =
        seconds < 10 ? `0${seconds}` : `${seconds}`;
      return `${formatMinutes}:${formatSeconds}`;
    }
    return '00:00';
  };

  return (
    <div className="flex items-center gap-2 w-full mt-2 border border-1 border-gray-300">
      <span className="text-slate-900">{formatTime(timeProgress)}</span>
      <input
        type="range"
        ref={progressBarRef}
        defaultValue="0"
        onChange={handleProgressChange}
      />
      <span className="text-slate-900">{formatTime(duration)}</span>
    </div>
  );
};

export default ProgressBar;