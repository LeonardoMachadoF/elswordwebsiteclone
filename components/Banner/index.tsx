import { useEffect, useState } from 'react';
import styles from './styles.module.css';

type Props = {
    banners: string[];
}

export const Banner = ({ banners }: Props) => {
    const [mLeft, setMLeft] = useState(0);

    useEffect(() => {
        if (banners.length > 1) setTimeout(() => {
            mLeft === banners.length * -100 + 100 ? setMLeft(0) : setMLeft(mLeft - 100);
        }, 2000);
    }, [mLeft]);



    return (
        <div className={styles.container}>
            <div className={styles.carrousel} style={{ width: '200%', marginLeft: `${mLeft}vw` }}>
                {banners && banners.length > 1 &&
                    banners.map((banner, index) => {
                        return <img src={banner} key={index} />
                    })
                }

            </div>
            {banners && banners.length === 1 &&
                <img style={{ width: '100%' }} src={banners[0]} />
            }
        </div>
    )
}
