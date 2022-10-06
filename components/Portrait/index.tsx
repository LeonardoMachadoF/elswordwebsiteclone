import styles from './styles.module.css';
import { Character } from "../../libs/characters"
import { memo } from 'react';
import Image from 'next/image';

type Props = {
    char: Character;
    setActiveCharacter: (name: string) => void;
    activeCharacter: boolean;
    setLoading: (status: boolean) => void;
}

const Portrait = ({ char, setActiveCharacter, activeCharacter, setLoading }: Props) => {
    return (
        <div
            className={styles.portrait}
            style={{ filter: activeCharacter ? 'grayscale(0%)' : 'grayscale(100%)' }}
            onClick={() => {
                !activeCharacter ? setActiveCharacter(char.name) : '';
                setLoading(true)
            }}
        >
            <Image className={styles.img} src={char.portrait} alt="" width={150} height={126} />
        </div>
    )
}

export default memo(Portrait);