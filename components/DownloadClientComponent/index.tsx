import Link from 'next/link';
import styles from './styles.module.css';

type Props = {
    title: string;
    buttonImg: string;
    bgImg: string;
}

export const DownloadClientComponent = ({ title, buttonImg, bgImg }: Props) => {
    return (
        <div className={styles.container} style={{ backgroundImage: `url(${bgImg})` }}>
            <div className={styles.title}>
                {title}
            </div>
            <div className={styles.button}>
                <img src={buttonImg} alt="" />
            </div>
            <Link href={`/download/installation-guide?${title.split(' ')[0] === 'ENGLISH' ? 'en' : 'pt'}`} >
                <div className={styles.desc}>
                    See Installation Instructions
                </div>
            </Link>
        </div>
    )
}
