import { useEffect, useMemo, useState } from "react";
import dynamic from 'next/dynamic'
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });
import { Banner } from "../components/Banner";
import Header from "../components/Header";
import styles from '../styles/Media.module.css'
import Image from "next/image";
import { Play } from "phosphor-react";
import { GetStaticProps } from "next";
import { getMediaData } from "../libs/getMediaData";
import SwipperCarrouselMedia from "../components/SwipperCarrouselMedia";

const Media = (data: Props) => {

    const [url, setUrl] = useState('https://youtu.be/YrrNu9DcpRU');
    const [anime, setAnime] = useState(true);
    const [mediaList, setMediaList] = useState(data.animes);
    const [playHover, setPlayHover] = useState('');
    const [modalOpen, setModalOpen] = useState(false);
    const [modalUrl, setModalUrl] = useState('');
    const [heightVideo, setHeightVideo] = useState('65vh');

    useEffect(() => {
        if (window.innerWidth < 520) {
            setHeightVideo('28vh')
            return
        }
        if (window.innerWidth < 1100) {
            setHeightVideo('35vh')
            return
        }
    }, [])


    return (
        <div>
            <Header area='community' />
            <Banner banners={['/assets/mh-media.jpg']} />
            <div className={styles.bg}>
                <div className={styles.main}>
                    <h1 className={styles.mainTitle}>
                        FEATURED VIDEOS
                    </h1>
                    <div className={styles.video}>
                        {useMemo(() =>
                            <ReactPlayer url={url} style={{ margin: 'auto' }} controls width='100%' height={heightVideo} />
                            , [url, heightVideo])}
                    </div>
                    <SwipperCarrouselMedia setUrl={setUrl} />
                </div>
            </div>
            <div className={styles.bg2}>
                <div className={styles.secondAreaMain}>

                    <div className={styles.titleSecond}>
                        <h1
                            style={{ backgroundImage: anime ? `url('/assets/media-on.png')` : `url('/assets/media-off.png')` }}
                            onClick={e => { setAnime(true), setMediaList(data.animes) }}
                        >
                            ANIME
                        </h1>
                        <h1
                            style={{ backgroundImage: anime ? `url('/assets/media-off.png')` : `url('/assets/media-on.png')` }}
                            onClick={e => { setAnime(false); setMediaList(data.videos) }}
                        >
                            VIDEOS
                        </h1>
                    </div>

                    <div className={styles.contentVideos}>
                        {mediaList &&
                            mediaList.map((anime) => {
                                return (
                                    <div className={styles.dataItem} key={anime.link}>
                                        <Image src={anime.img} width={320} height={170} />
                                        <div
                                            className={styles.play}
                                            onMouseEnter={() => setPlayHover(anime.link)}
                                            onMouseLeave={() => setPlayHover('')}
                                            style={{ scale: (anime.link === playHover) ? '1.1' : '1', transition: 'all ease .2s', marginLeft: (anime.link === playHover) ? '5px' : '' }}
                                            onClick={() => { setModalUrl(anime.link); setModalOpen(true); }}
                                        >
                                            {anime.link === playHover ? <Play size={32} /> : 'PLAY'}
                                        </div>

                                        <h1>Elsword 4th Path Story</h1>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div
                className={styles.modal}
                style={{ opacity: modalOpen ? 1 : 0, zIndex: modalOpen ? 999 : -100 }}
                onClick={() => setModalOpen(false)}
            >
                <div className={styles.internModal}>
                    <ReactPlayer playing={modalOpen} url={modalUrl} style={{ margin: 'auto' }} controls width='80%' height='100%' />
                </div>
            </div>
        </div>
    )
}

export default Media;

type Props = {

    animes: {
        link: string;
        img: string;
    }[],
    videos: {
        link: string;
        img: string;
    }[]

}

export const getStaticProps: GetStaticProps = async () => {
    let { animes, videos } = getMediaData();

    return {
        props: {
            animes,
            videos
        }
    }
}