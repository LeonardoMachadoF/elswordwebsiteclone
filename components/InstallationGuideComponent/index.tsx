import { useEffect, useState } from 'react';
import styles from './styles.module.css';

type Props = {
    title: string;
    resume: string;
    imageUrl: string;
}

export const InstallationGuideComponent = ({ title, resume, imageUrl }: Props) => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                {title.substring(0, 7)}
                <p>
                    {title.substring(7)}
                </p>
            </h1>
            <div className={styles.resume}>{resume}</div>
            <div className={styles.img}>
                <img src={imageUrl} alt="" />
            </div>
        </div>
    )
}
