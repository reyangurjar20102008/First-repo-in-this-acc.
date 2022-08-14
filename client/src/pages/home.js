import Topnav from '../component/topnav/topnav';
import TitleL from '../component/text/title-l';
import TitleM from '../component/text/title-m'
import PlaylistCardS from '../component/cards/playlist-card-s';
import PlaylistCardM from '../component/cards/playlist-card-m';

import styles from "./home.module.css";

import { PLAYLIST } from '../data/index'
import {homeData} from '../data/home'

function Home(){

    return (
        <div className={styles.Home}>
            <div className={styles.HoverBg}></div>
            <div className={styles.Bg}></div>

            <Topnav />
            <div className={styles.Content}>
                {/* <section>
                    <div className={styles.SectionTitle}>
                        <TitleL>Recently Played </TitleL>
                    </div>

                    <div className={styles.SectionCards}>
                        {PLAYLIST.map((item) => {
                            return (
                                <PlaylistCardS 
                                    key={item.title}
                                    data={item}
                                />
                            );
                        })}
                    </div>
                </section> */}

                <section>
                    <div className={styles.SectionTitle}>
                        <TitleM>{homeData.genres[0].name}</TitleM>
                    </div>
                    
                    <div className={styles.SectionCardsMedium}>
                        {homeData.genres[0].contents.items.slice(0, 6).map((item) => {
                            return (
                                <PlaylistCardM 
                                    key={item.name}
                                    data={item}
                                />
                            );
                        })}
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Home;