import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player/youtube'
import { useCharacterContext } from '../../contexts/character/context';
import { Character, ClassType } from '../../libs/characters';
import { OtherClasses } from '../OtherClasses';
import styles from './styles.module.css';

type Props = {
    character: Character;
}

export const CharacterArea = ({ character }: Props) => {
    const { activeClass, setActiveClass } = useCharacterContext();
    const [url, setUrl] = useState('');

    useEffect(() => {
        setUrl(character?.videoUrl as string);
    }, [url, character])

    return (
        <div className={styles.container}>
            <div className={styles.characterImage}>
                <img src={character.classes[activeClass - 1].imageUrl} alt="" />
            </div>
            <div className={styles.characterInfo}>
                <div className={styles.name}>{character.name.toUpperCase()}</div>
                <div className={styles.alias}>{character.alias}</div>
                <div className={styles.class}>{character.classes[(activeClass - 1)].name}</div>
                <div className={styles.description}>{character.classes[(activeClass - 1)].description}</div>

                <div>
                    {url ? <ReactPlayer url={url} width={400} /> : ''}
                </div>

                <div className={styles.classesArea}>
                    {character.classes.map((path: ClassType) => {
                        return (
                            <OtherClasses key={path.name} path={path} activeClass={activeClass} setActiveClass={setActiveClass} />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}