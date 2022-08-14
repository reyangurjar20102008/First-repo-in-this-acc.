import { useParams } from 'react-router';
import { changeTrack } from '../actions';
import Topnav from '../component/topnav/topnav';
import TextRegularM from "../component/text/text-regular-m";
import PlayButton from '../component/buttons/play-button';
import IconButton from '../component/buttons/icon-button';
import PlaylistDetails from '../component/playlist/playlist-details';
import PlaylistTrack from '../component/playlist/playlist-track';
import * as Icons from '../component/icons';
import { PLAYLIST } from "../data/index";
import {playlistMetadata} from '../data/playlist';

import styles from './playlist.module.css';
import { useEffect, useState } from 'react';

function PlaylistPage(props) {
	const[playlistIndex, setPlaylistIndex] = useState(undefined);
	const [playListData, setplayListData] = useState({})
	const[isthisplay, setIsthisPlay] = useState(false);
	const[loading,setLoading] = useState(true)
	const { path } = useParams();

	function changeBg(color){
		document.documentElement.style.setProperty('--hover-home-bg', color);
	}

	useEffect(() => {
		setIsthisPlay(playlistIndex === props.trackData.trackKey[0])
	})
	useEffect(() => {
		// declare the data fetching function
		
		const fetchData = async () => {
			console.log('function called')
		  const response = await fetch(`/api/playlist/${path}`);
		  const data = await response.json()
		//   console.log(data.json())
		//   console.log(JSON.stringify(data))
		console.log(data)
		  setplayListData(data)
		  setLoading(false)
		}
		
		// call the function
		fetchData()
		
		  // make sure to catch any error
		  .catch(console.error);
		// console.log(path)
	  }, [])
	return (
		<div className={styles.PlaylistPage}>
			<div className={styles.gradientBg}></div>
            <div className={styles.gradientBgSoft}></div>
			<div className={styles.Bg}></div>

			<Topnav />

			{loading ? "??????????" : <div >

<PlaylistDetails data={playListData} />

<div className={styles.PlaylistIcons}>
	<button
		// onClick={() => props.changeTrack([0, 0])} 
	>
		<PlayButton isthisplay={isthisplay}/>
	</button>
	<IconButton icon={<Icons.Like />} activeicon={<Icons.LikeActive />}/>
	<Icons.More className={styles.moreIcon}/>
</div>

<div className={styles.ListHead}>
	<TextRegularM>#</TextRegularM>
	<TextRegularM>Title</TextRegularM>
	<Icons.Time/>
</div>

<div className={styles.PlaylistSongs}>
	{playListData.playlistItems.map((song) => {
		return (
			<button 
				key={song.index} 
				onClick={() => props.changeTrack([0, playListData.playlistItems.indexOf(song)])} 
				className={styles.SongBtn}
			>
				<PlaylistTrack 
					data={{
						listType: playListData.playlistItems.type,
						song: song
					}}
				/>
			</button>
		);
	})}
</div>
</div> }
                        
                    
		</div>
	);
}



const mapStateToProps = (state) => {
	return {
		trackData: state.trackData,
	};
};
  
export default PlaylistPage