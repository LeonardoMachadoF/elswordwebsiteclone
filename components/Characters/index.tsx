import { useState } from 'react';
import { Character, characters } from '../../libs/characters';
import { Protrait } from '../Protrait';
import styles from './styles.module.css';

export const Characters = () => {
    const [activeCharacter, setActiveCharacter] = useState('');

    const handleCharacterPortraitClick = (name: string) => {
        setActiveCharacter(name)
    }

    return (
        <div className={styles.container}>
            <div className={styles.leftArea}>
                <div className={styles.label}>CHARACTERS</div>
                <div className={styles.characters}>
                    {characters.map((i: Character) => {
                        return (
                            <Protrait
                                key={i.className.name}
                                name={i.name}
                                imageUrl={i.portrait}
                                activeCharacter={activeCharacter}
                                onClick={handleCharacterPortraitClick}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}