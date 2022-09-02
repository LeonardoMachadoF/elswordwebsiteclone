import styles from './styles.module.css';
import { Character } from "../../libs/characters"
import { useCharacterContext } from '../../contexts/character/context';

type Props = {
    char: Character;
    setActiveCharacter: (name: string) => void;
    activeCharacter: string;
}

export const Portrait = ({ char, setActiveCharacter, activeCharacter }: Props) => {
    const { setActiveClass } = useCharacterContext();
    const handleClick = () => {
        setActiveClass(1);
        setActiveCharacter(char.name);
    }

    return (
        <div
            className={styles.portrait}
            style={{ filter: activeCharacter === char.name ? 'grayscale(0%)' : 'grayscale(100%)' }}
            onClick={handleClick}
        >
            <img className={styles.img} src={char.portrait} alt="" />
        </div>
    )
}