import {useContext} from 'react';
import * as Icons from '../icons';
import IconButton from '../buttons/icon-button';
import { isPlayingContext } from '../../App'
import styles from './play-button.module.css'
import IsPlayingContext from '../../context/IsPlayingContext';
function PlayButton({isThisPlaying,setIsThisPlaying}) {
        const {isPlaying,setIsPlaying} = useContext(IsPlayingContext)
        const handleCLick = ()=>{
          setIsPlaying(!isPlaying)
          if(isThisPlaying !=undefined){
            setIsThisPlaying(!isThisPlaying)
          }
          // console.log(isThisPlaying)
          console.log(isPlaying)
        }
        return (<>
          { isThisPlaying != undefined ? <div className={styles.playBtn} tabIndex="0" role="button" onClick={() => handleCLick()}>
                {isThisPlaying
                        ?  <IconButton icon={<Icons.Pause />} activeicon={<Icons.Pause />}/>
                        : <IconButton icon={<Icons.Play />} activeicon={<Icons.Play />}/>
                }
            </div> : <div className={styles.playBtn} tabIndex="0" role="button" onClick={() => handleCLick()}>
                { isPlaying 
                        ?  <IconButton icon={<Icons.Pause />} activeicon={<Icons.Pause />}/>
                        : <IconButton icon={<Icons.Play />} activeicon={<Icons.Play />}/>
                }
            </div>}
            
            </>
        );
}


export default PlayButton