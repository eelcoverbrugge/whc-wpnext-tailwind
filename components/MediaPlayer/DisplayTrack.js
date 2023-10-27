import { BsMusicNoteBeamed } from 'react-icons/bs';
import Image from "next/image";

const DisplayTrack = ({
  currentTrack,
  audioRef,
  setDuration,
  progressBarRef,
  handleNext,
}) => {
  const onLoadedMetadata = () => {
    const seconds = audioRef.current.duration;
    setDuration(seconds);
    progressBarRef.current.max = seconds;
  };

  return (
    <div>
      <audio
        src={currentTrack.src}
        ref={audioRef}
        onLoadedMetadata={onLoadedMetadata}
        onEnded={handleNext}
      />
      <div className="flex gap-4">
        <div className="w-[300px] h-[300px] bg-darkPurple">
          {currentTrack.thumbnail ? (
            <Image
              src={currentTrack.thumbnail}
              alt="audio avatar"
              width="400"
              height="261"
            />
          ) : (
            <div className="flex items-center justify-center h-full">
              <span className="flex justify-center items-center h-[80px] w-[80px] rounded-full text-4xl bg-gray-200">
                <BsMusicNoteBeamed />
              </span>
            </div>
          )}
        </div>
        <div className="text-black text-lg font-bold">
          <p className="text-white text-3xl font-bold m-0 p-1 bg-darkPurple">{currentTrack.title}</p>
          <p>{currentTrack.author}</p>
        </div>
      </div>
    </div>
  );
};
export default DisplayTrack;