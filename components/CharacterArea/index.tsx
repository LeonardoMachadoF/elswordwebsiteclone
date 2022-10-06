import { useEffect, useRef, useState } from 'react';
import ReactPlayer from 'react-player/lazy'
import { useCharacterContext } from '../../contexts/character/context';
import { Character, ClassType } from '../../libs/characters';
import { OtherClasses } from '../OtherClasses';
import styles from './styles.module.css';

type Props = {
    character: Character;
    loading: boolean;
    setLoading: (status: boolean) => void;
}

export const CharacterArea = ({ character, loading, setLoading }: Props) => {
    const { activeClass, setActiveClass, scale, setScale } = useCharacterContext();
    const [url, setUrl] = useState('');
    const imageRef = useRef<HTMLImageElement | null>(null);


    useEffect(() => {
        setUrl(character?.videoUrl as string);
    }, [url, character])

    useEffect(() => {
        imageRef.current?.addEventListener('load', () => {
            setScale(1);
            setLoading(false);
        })

        return () => {
            imageRef.current?.removeEventListener('load', () => {

            })
        };
    }, [imageRef.current])



    return (
        <div className={styles.container}>
            <div className={styles.characterImage}>
                <img ref={imageRef} src={character.classes[activeClass - 1].imageUrl} alt="" style={{ scale: scale ? `${scale}` : '0', transition: 'all ease .8s' }} />
                {loading &&
                    <div className={styles.loadingSpinner} style={{ position: 'fixed', zIndex: 999, top: '50%' }}></div>
                }
            </div>
            <div className={styles.characterInfo}>
                <div className={styles.name}>{character.name.toUpperCase()}</div>
                <div className={styles.alias}>{character.alias}</div>
                <div className={styles.class}>{character.classes[(activeClass - 1)].name}</div>
                <div className={styles.description}>{character.classes[(activeClass - 1)].description}</div>

                <div>
                    {url ? <ReactPlayer url={url} style={{ margin: 'auto' }} width={`98%`} /> : ''}
                </div>

                <div className={styles.classesArea}>
                    {character.classes.map((path: ClassType) => {
                        return (
                            <OtherClasses key={path.name} path={path} activeClass={activeClass} setActiveClass={setActiveClass} setLoading={setLoading} />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
