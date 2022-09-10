import { CaretDoubleDown } from 'phosphor-react';
import { useState } from 'react';
import styles from './styles.module.css';

type Props = {
    imageUrl: string;
    title: string;
    subtitle?: string;
    description: string;
    left?: boolean;
    buttonTitle?: string;
}

export const ItemOfGamePage = ({ imageUrl, title, subtitle, description, left, buttonTitle }: Props) => {
    const [hover, setHover] = useState(false);

    return (
        <div className={styles.itemGame}>
            <div className={styles.img}>
                <img src={imageUrl} alt="" />
            </div>
            <div className={styles.info} style={{ left: left ? 'auto' : 0, right: left ? 0 : 'auto' }}>
                <div className={styles.title}>
                    {title.toUpperCase()}
                </div>
                <div className={styles.subtitle}>
                    {subtitle}
                </div>
                <div className={styles.description}>
                    {description}
                </div>
                {buttonTitle &&
                    <div
                        onMouseEnter={() => setHover(true)}
                        onMouseLeave={() => setHover(false)}
                        className={styles.button}
                        style={{ borderColor: hover ? 'transparent' : '#edb059' }}
                    >
                        {buttonTitle} {hover && <CaretDoubleDown size={20} style={{ marginLeft: '12px' }} />}
                    </div>
                }
            </div>
        </div>
    )
}