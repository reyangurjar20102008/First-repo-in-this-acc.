import React, { forwardRef } from 'react';


const Audio = forwardRef(({ handleDuration, handleCurrentTime, isPlaying }, ref) => {
    return (
      <audio
        ref={ref}
        onLoadedMetadata={(e) => handleDuration(e.target.duration)}
        onTimeUpdate={(e) => handleCurrentTime(e.target.currentTime)}
        src="https://file-examples.com/storage/fe522079b962f100d94fb66/2017/11/file_example_MP3_700KB.mp3"
        autoPlay={isPlaying}
      />
    );
  },
);



export default Audio;