import styles from './styles.module.css';
import { Character } from "../../libs/characters"
import { memo } from 'react';

type Props = {
    char: Character;
    setActiveCharacter: (name: string) => void;
    activeCharacter: boolean;
}

const Portrait = ({ char, setActiveCharacter, activeCharacter }: Props) => {
    return (
        <div
            className={styles.portrait}
            style={{ filter: activeCharacter ? 'grayscale(0%)' : 'grayscale(100%)' }}
            onClick={() => setActiveCharacter(char.name)}
        >
            <img className={styles.img} src={char.portrait} alt="" />
        </div>
    )
}

export default memo(Portrait);