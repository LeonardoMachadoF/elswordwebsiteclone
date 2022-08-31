import { useState } from 'react';
import styles from './styles.module.css';

type Props = {
    imageUrl: string;
    name: string;
    activeCharacter: string;
    onClick: (name: string) => void;
}

export const Protrait = ({ name, imageUrl, onClick, activeCharacter }: Props) => {
    return (
        <div
            className={styles.container}
            style={{ filter: activeCharacter === name ? '' : 'grayscale(100%)' }}
            onClick={() => onClick(name)}
        >
            <img className={styles.img} src={imageUrl} alt="" />
        </div>
    )
}