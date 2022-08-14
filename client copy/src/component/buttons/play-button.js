import {useContext} from 'react';
import * as Icons from '../icons';
import IconButton from '../buttons/icon-button';
import { isPlayingContext } from '../../App'
import styles from './play-button.module.css'
import IsPlayingContext from '../../context/IsPlayingContext';
function PlayButton(props) {
        const {isPlaying,setIsPlaying} = useContext(IsPlayingContext)
        const handleCLick = ()=>{
          setIsPlaying(!isPlaying)
          console.log(isPlaying)
        }
        return (
            <div className={styles.playBtn} tabIndex="0" role="button" onClick={() => handleCLick()}>
                {isPlaying && props.isthisplay
                        ? <IconButton icon={<Icons.Pause />} activeicon={<Icons.Pause />}/>
                        : <IconButton icon={<Icons.Play />} activeicon={<Icons.Play />}/>
                }
            </div>
        );
}

const mapStateToProps = (state) => {
  return {
    isPlaying: state.isPlaying
  };
};

export default PlayButton