import styles from './styles.module.css';
import { Character } from "../../libs/characters"

type Props = {
    char: Character;
    setActiveCharacter: (name: string) => void;
    activeCharacter: string;
}

export const Portrait = ({ char, setActiveCharacter, activeCharacter }: Props) => {
    return (
        <div
            key={char.className.name}
            className={styles.portrait}
            style={{ filter: activeCharacter === char.name ? 'grayscale(0%)' : 'grayscale(100%)' }}
            onClick={() => setActiveCharacter(char.name)}
        >
            <img className={styles.img} src={char.portrait} alt="" />
        </div>
    )
}