import { useEffect, useState } from 'react';
import { Character, characters } from '../../libs/characters';
import { CharacterArea } from '../CharacterArea';
import styles from './styles.module.css';

export const Characters = () => {
    const [activeCharacter, setActiveCharacter] = useState('Elsword');
    const [chosenCharacter, setChosenCharacter] = useState<Character>();

    useEffect(() => {
        const char = characters.filter((i: Character) => i.name === activeCharacter ? i : '');
        setChosenCharacter(char[0]);
    }, [activeCharacter])

    return (
        <div className={styles.container}>
            <div className={styles.leftArea}>
                <div className={styles.characters}>
                    <div className={styles.label}>CHARACTERS</div>
                    <div className={styles.portraitArea}>
                        {characters.map((i: Character) => {
                            return (
                                <div
                                    key={i.className.name}
                                    className={styles.portrait}
                                    style={{ filter: activeCharacter === i.name ? 'grayscale(0%)' : 'grayscale(100%)' }}
                                    onClick={() => setActiveCharacter(i.name)}
                                >
                                    <img className={styles.img} src={i.portrait} alt="" />
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className={styles.imgCharacter}>
                    <CharacterArea character={chosenCharacter} />
                </div>
            </div>
        </div>
    )
}