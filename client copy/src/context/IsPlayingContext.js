import React from 'react'

const IsPlayingContext =  React.createContext({
    isPlaying: false,
    setIsPlaying: () => {}
  });

export default IsPlayingContext