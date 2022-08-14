import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TextBoldL from "../text/text-bold-l";
import TextRegularM from '../text/text-regular-m';
import PlayButton from '../buttons/play-button';

import styles from "./playlist-card-m.module.css";

function PlaylistCardM(props) {
	const[isthisplay, setIsthisPlay] = useState(false)


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
				
				className={`${styles.IconBox} ${isthisplay&&props.isPlaying ? styles.ActiveIconBox : ''}`}
			>
				<PlayButton isthisplay={isthisplay} />
			</div>
		</div>
	);
}


  
export default PlaylistCardM
