import React, { useRef, useEffect, useState } from 'react';
import useWindowSize from '../../hooks/useWindowSize';
import FooterLeft from './footer-left';
import MusicControlBox from './player/music-control-box';
import MusicProgressBar from './player/music-progress-bar';
import FooterRight from './footer-right';
import Audio from './audio';
import { useContext } from 'react';
import { PLAYLIST } from "../../data/index";
import CONST from '../../constants/index';
import styles from "./footer.module.css";
import IsPlayingContext from '../../context/IsPlayingContext';
function Footer(props){
    const size = useWindowSize();
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [volume, setVolume] = useState(1);
    const audioRef = useRef(null);
    const {isPlaying,setIsPlaying} = useContext(IsPlayingContext)
    const handleTrackClick = (position) => {
        audioRef.current.currentTime = position;
    };

    useEffect(() => {
        if (isPlaying) {
          audioRef.current.play();
        } else {
          audioRef.current.pause();
        }
    }, [audioRef,isPlaying]);

    
    
    /*useEffect(() => {
        if (props.isPlaying) {
          localStorage.setItem('playedSong', audioRef.current.currentSrc);
        } else {
          localStorage.setItem('playedSong', 'stop');
        }
    });*/

    useEffect(() => {
        audioRef.current.volume = volume;
        
    }, [audioRef, volume]);


        useEffect(() => {
            // console.log(isPlaying)
            setIsPlaying(!isPlaying)
            console.log(isPlaying)
        }, [])
        
    
    return (
        <footer className={styles.footer}>
            <div className={styles.nowplayingbar}>
                
                <FooterLeft />
                <div className={styles.footerMid}>
                    <MusicControlBox  />
                    <MusicProgressBar 
                        currentTime={currentTime} 
                        duration={duration} 
                        handleTrackClick={handleTrackClick}
                    />
                    <Audio
                        ref={audioRef}
                        handleDuration={setDuration}
                        handleCurrentTime={setCurrentTime}
                    />
                </div>
                {size.width > CONST.MOBILE_SIZE && 
                    <FooterRight 
                        volume={volume} 
                        setVolume={setVolume}
                    />
                }
            </div>
        </footer>
    );
}



  
export default Footer