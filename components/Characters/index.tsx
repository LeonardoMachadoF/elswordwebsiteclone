import { useCallback, useEffect, useState } from 'react';
import { useCharacterContext } from '../../contexts/character/context';
import { Character, characters } from '../../libs/characters';
import { wait500 } from '../../libs/wait';
import { CharacterArea } from '../CharacterArea';
import Portrait from '../Portrait';
import styles from './styles.module.css';

export const Characters = () => {
    const { setActiveClass, setScale } = useCharacterContext();

    const [activeCharacter, setActiveCharacter] = useState('Elsword');
    const [chosenCharacter, setChosenCharacter] = useState<Character>(characters[0]);
    const [loading, setLoading] = useState(false);

    const handleActiveCharacter = useCallback(async (name: string) => {
        setScale(0);
        await wait500();
        setActiveCharacter(name);
        setActiveClass(1);
    }, [])

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
                                    setActiveCharacter={handleActiveCharacter}
                                    activeCharacter={activeCharacter === i.name}
                                    setLoading={setLoading}
                                />
                            )
                        })}

                    </div>
                </div>
            </div>
            <div className={styles.rightArea}>
                <CharacterArea character={chosenCharacter} loading={loading} setLoading={setLoading} />
            </div>
        </div>
    )
}