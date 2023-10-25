import React from "react";
import DisplayTrack from "./DisplayTrack";
// import Controls from "./Controls";
// import ProgressBar from "./ProgressBar";
import { tracks } from "./tracks";

export const MediaPlayer = () => {
  const [currentTrack, setCurrentTrack] = React.useState(tracks[0]);

  return (
    <div className="audio-player">
      <div className="inner">
        <DisplayTrack currentTrack={currentTrack} />
        {/*<Controls />*/}
        {/*<ProgressBar />*/}
      </div>
    </div>
  );
};
