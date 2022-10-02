import { useEffect, useRef, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import dynamic from 'next/dynamic'
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });
import { Banner } from "../components/Banner";
import Header from "../components/Header";
import styles from '../styles/Media.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { useSwiper } from 'swiper/react';
import Image from "next/image";
import { CaretLeft, CaretRight } from "phosphor-react";

const Media = () => {
    const [margin, setMargin] = useState(0);
    const [url, setUrl] = useState('https://youtu.be/YrrNu9DcpRU');
    const [anime, setAnime] = useState(true);


    const sliderRef = useRef<any>(null);

    let videos = [
        { videoUrl: 'https://youtu.be/YrrNu9DcpRU', imageUrl: '/assets/hqdefault.jpg' },
        { videoUrl: 'https://youtu.be/3bOcwEW5c4g', imageUrl: '/assets/hqdefault(1).jpg' },
        { videoUrl: 'https://youtu.be/0dxMD60hvc8', imageUrl: '/assets/hqdefault3.jpg' },
        { videoUrl: 'https://youtu.be/qy36jnSmYpg', imageUrl: '/assets/hqdefault4.jpg' },
        { videoUrl: 'https://youtu.be/kFC51BALask', imageUrl: '/assets/hqdefault5.jpg' },
        { videoUrl: 'https://youtu.be/g_cBWN_NxWI', imageUrl: '/assets/hqdefault6.jpg' },
        { videoUrl: 'https://youtu.be/keaBxk9B5V0', imageUrl: '/assets/hqdefault8.jpg' }
    ]



    const handleClick = () => {
        if (parseFloat(sliderRef.current!.children[1].children[0].style.transform.split('(')[1].split(',')[0].split('px')[0]) > -800)
            setMargin(parseFloat(sliderRef.current!.children[1].children[0].style.transform.split('(')[1].split(',')[0].split('px')[0]) - 273.75);
    }

    const handeBeforeClick = () => {
        if (parseFloat(sliderRef.current!.children[1].children[0].style.transform.split('(')[1].split(',')[0].split('px')[0]) < 0)
            setMargin(parseFloat(sliderRef.current!.children[1].children[0].style.transform.split('(')[1].split(',')[0].split('px')[0]) + 273.75);
    }

    useEffect(() => {
        sliderRef.current!.children[1].children[0].style.transform = `translate3d(${margin}px, 0px, 0px)`
    }, [margin])

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
                        <ReactPlayer url={url} style={{ margin: 'auto' }} controls width='100%' height='600px' />
                    </div>
                    <div className={styles.swiper} ref={sliderRef}>
                        <div className={styles.arrowsLeft} onClick={handeBeforeClick}>
                            {<CaretLeft size={80} color={'#000000'} weight='bold' />}
                        </div>
                        <Swiper slidesPerView={4} spaceBetween={15}>
                            {videos.map((i) => {
                                return (
                                    <SwiperSlide key={i.imageUrl}>
                                        <Image style={{ cursor: 'pointer' }} src={i.imageUrl} height={196} width={260} onClick={() => setUrl(i.videoUrl)} />
                                    </SwiperSlide>
                                )
                            })}
                        </Swiper>
                        <div className={styles.arrowsRight} onClick={handleClick}>
                            {<CaretRight size={80} color={'#000000'} weight='bold' />}
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.bg2}>
                <div className={styles.secondAreaMain}>

                    <div className={styles.titleSecond}>
                        <h1
                            style={{ backgroundImage: anime ? `url('/assets/media-on.png')` : `url('/assets/media-off.png')` }}
                            onClick={e => { setAnime(true) }}
                        >
                            ANIME
                        </h1>
                        <h1
                            style={{ backgroundImage: anime ? `url('/assets/media-off.png')` : `url('/assets/media-on.png')` }}
                            onClick={e => { setAnime(false) }}
                        >
                            VIDEOS
                        </h1>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Media;