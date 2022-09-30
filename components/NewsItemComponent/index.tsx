import Image from 'next/image';
import Link from 'next/link';
import { NewsType } from '../../types/NewsType';
import styles from './styles.module.css';

type Props = {
    news: NewsType;
    categoryColor: any;
}

export const NewsItemComponent = ({ news, categoryColor }: Props) => {
    console.log(categoryColor)
    return (
        <div className={styles.container}>
            <div>
                <Image src={news.imageUrl} width={320} height={150} />
            </div>
            <div className={styles.info}>
                <div className={styles.title}>
                    <Link href={news.linkToNews}>{news.title}</Link>
                </div>
                <div className={styles.dataAndType}>
                    <div>{news.data}</div>
                    <div>|</div>
                    <div className={styles.type} style={{ backgroundColor: categoryColor }}>
                        <Link href={news.categoryLink}>
                            {news.type.split('[')[1].split(']')[0].toUpperCase()}
                        </Link>
                    </div>
                </div>
                <div className={styles.resume}>{news.resume}</div>
                <div className={styles.readMode}>
                    <Link href={news.linkToNews}>read more</Link>
                </div>
            </div>
        </div>
    )
}

