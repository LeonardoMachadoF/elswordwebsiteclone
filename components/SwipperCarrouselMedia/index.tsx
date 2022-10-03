import { memo, useEffect, useRef, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import styles from './styles.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from "next/image";
import { CaretLeft, CaretRight } from "phosphor-react";


type Props = {
    setUrl: (url: string) => void;
}

const SwipperCarrouselMedia = ({ setUrl }: Props) => {
    const [margin, setMargin] = useState(0);
    const sliderRef = useRef<any>(null);
    const [sliderPerView, setSliderPerView] = useState(4);

    let videos = [
        { videoUrl: 'https://youtu.be/YrrNu9DcpRU', imageUrl: '/assets/hqdefault.jpg' },
        { videoUrl: 'https://youtu.be/3bOcwEW5c4g', imageUrl: '/assets/hqdefault(1).jpg' },
        { videoUrl: 'https://youtu.be/0dxMD60hvc8', imageUrl: '/assets/hqdefault3.jpg' },
        { videoUrl: 'https://youtu.be/qy36jnSmYpg', imageUrl: '/assets/hqdefault4.jpg' },
        { videoUrl: 'https://youtu.be/kFC51BALask', imageUrl: '/assets/hqdefault5.jpg' },
        { videoUrl: 'https://youtu.be/g_cBWN_NxWI', imageUrl: '/assets/hqdefault6.jpg' },
        { videoUrl: 'https://youtu.be/keaBxk9B5V0', imageUrl: '/assets/hqdefault8.jpg' }
    ]

    useEffect(() => {
        if (window.innerWidth < 820) {
            setSliderPerView(2)
            return;
        }
        if (window.innerWidth < 1285) {
            setSliderPerView(3)
            return;
        }
    }, [])

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
        <div className={styles.swiper} ref={sliderRef}>
            <div className={styles.arrowsLeft} onClick={handeBeforeClick}>
                {<CaretLeft size={80} color={'#000000'} weight='bold' />}
            </div>
            <Swiper slidesPerView={sliderPerView} spaceBetween={15}>
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
    )
}

export default memo(SwipperCarrouselMedia);