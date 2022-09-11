import styles from './styles.module.css';

type Props = {
    tipLogo: string;
    tip: string;
    imageUrl: string;
}

export const ItemComponent = ({ tipLogo, tip, imageUrl }: Props) => {
    return (
        <div className={styles.container}>
            <div className={styles.tipArea}>
                <div>
                    <img src={tipLogo} alt="" />
                </div>
                <div>
                    {tip}
                </div>
            </div>
            <div className={styles.img}>
                <img src={imageUrl} alt="" />
            </div>
        </div>
    )
}