import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player/youtube'
import { Character } from '../../libs/characters';
import styles from './styles.module.css';

type Props = {
    character: Character | undefined;
}

export const CharacterArea = ({ character }: Props) => {
    const [url, setUrl] = useState('');
    useEffect(() => {
        setUrl(character?.videoUrl as string);
    }, [url, character])

    return (
        <div className={styles.container}>
            <div className={styles.characterImage}>
                <img src={character?.className.imageUrl} alt="" />
            </div>
            <div className={styles.characterInfo}>
                <div className={styles.name}>{character?.name.toUpperCase()}</div>
                <div className={styles.alias}>{character?.alias}</div>
                <div className={styles.class}>{character?.className.name}</div>
                <div className={styles.description}>{character?.className.description}</div>

                <div>
                    {url ? <ReactPlayer url={url} width={400} /> : ''}
                </div>

            </div>
        </div>
    )
}
