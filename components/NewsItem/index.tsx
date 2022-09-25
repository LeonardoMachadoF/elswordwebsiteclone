import styles from './styles.module.css';

type Props = {
    type: 'Event' | 'Item Mall' | 'Notice';
    title: string;
}

export const NewsItem = ({ type, title }: Props) => {
    return (
        <div className={styles.container}>
            <p>
                <span className={styles.type} style={{ backgroundColor: type === 'Event' ? '#ff6a00' : type === 'Item Mall' ? '#710eff' : type === 'Notice' ? '#f8424b' : '#000' }}>[{type}]</span>
                <small>{title}</small>
            </p>
        </div>
    )
}
