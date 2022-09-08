import styles from './styles.module.css';

type Props = {
    imageUrl: string;
    title: string;
    subtitle?: string;
    description: string;
    left?: boolean;
}

export const ItemOfGamePage = ({ imageUrl, title, subtitle, description, left }: Props) => {
    return (
        <div className={styles.itemGame}>
            <div className={styles.img}>
                <img src={imageUrl} alt="" />
            </div>
            <div className={styles.info} style={{ left: left ? 'auto' : 0, right: left ? 0 : 'autp' }}>
                <div className={styles.title}>
                    {title.toUpperCase()}
                </div>
                <div className={styles.subtitle}>
                    {subtitle}
                </div>
                <div className={styles.description}>
                    {description}
                </div>
            </div>
        </div>
    )
}