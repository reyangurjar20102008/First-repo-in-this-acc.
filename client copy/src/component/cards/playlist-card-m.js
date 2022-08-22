import {useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TextBoldL from "../text/text-bold-l";
import TextRegularM from '../text/text-regular-m';
import PlayButton from '../buttons/play-button';

import styles from "./playlist-card-m.module.css";
import IsPlayingContext from '../../context/IsPlayingContext';
function PlaylistCardM(props) {
	// isThisPlaying means is this playlist playing???
	const [isThisPlaying,setIsThisPlaying] = useState(false)
	const {isPlaying,setIsPlaying} = useContext(IsPlayingContext)
	useEffect(() => {
	  // I gotta remove other playlist's isThisPlaying ???
	
	  console.log(isThisPlaying)
	}, [])
	
	return (
		<div className={styles.PlaylistCardSBox}>
			<Link to={`/playlist/${props.data.id}`}>
				<div className={styles.PlaylistCardS}>
					<div className={styles.ImgBox}>
						<img src={props.data.images[0][0].url} alt={props.data.title} />
					</div>
					<div className={styles.Title}>
						<TextBoldL>{props.data.name}</TextBoldL>
						<TextRegularM>{props.data.owner.name}</TextRegularM>
					</div>
				</div>
			</Link>
			<div 
				
				className={`${styles.IconBox} ${isPlaying && isThisPlaying  ? styles.ActiveIconBox : ''}`}
			>
				<PlayButton isThisPlaying={isThisPlaying} setIsThisPlaying={setIsThisPlaying} />
			</div>
		</div>
	);
}


  
export default PlaylistCardM
