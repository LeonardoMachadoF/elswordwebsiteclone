import styles from './styles.module.css';

type Props = {
    imageUrl: string;
    title: string;
    desc: string;
    id: number;
    activeItem: number;
}

export const StoryItem = ({ imageUrl, title, desc, id, activeItem }: Props) => {

    return (
        <div className={styles.container} style={{ opacity: id === activeItem ? '1' : '0' }}>
            <div>
                <img src={imageUrl} alt="" />
            </div>
            <div className={styles.content}>
                <div className={styles.title}>{title}</div>
                {desc.split('<br>').map((i, k) => {
                    return (
                        <p key={`${id}${k}`} className={styles.desc}>{i}</p>
                    )
                })}
            </div>
        </div>
    )
}