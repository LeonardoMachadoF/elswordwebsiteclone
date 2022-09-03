import { useEffect, useState } from 'react';
import { Character, characters } from '../../libs/characters';
import { CharacterArea } from '../CharacterArea';
import { Portrait } from '../Portrait';
import styles from './styles.module.css';

export const Characters = () => {
    const [activeCharacter, setActiveCharacter] = useState('Elsword');
    const [chosenCharacter, setChosenCharacter] = useState<Character>(characters[0]);

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
                                <Portrait
                                    key={i.classes[0].name}
                                    char={i}
                                    setActiveCharacter={setActiveCharacter}
                                    activeCharacter={activeCharacter}
                                />
                            )
                        })}

                    </div>
                </div>
            </div>
            <div className={styles.rightArea}>
                <CharacterArea character={chosenCharacter} />
            </div>
        </div>
    )
}