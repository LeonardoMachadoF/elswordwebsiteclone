import styles from './styles.module.css';

type Props = {
    category: 'NEWS' | 'GUIDES';
    imageUrl: string;
}

export const NewsAndGuides = ({ category, imageUrl }: Props) => {

    return (
        <div className={styles.container}>
            <div className={styles.title}>{category}</div>
            <div className={styles.image}>
                <img src={imageUrl} alt="" />
            </div>
        </div>
    )
}
