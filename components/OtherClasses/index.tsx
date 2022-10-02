import { useCharacterContext } from '../../contexts/character/context';
import { ClassType } from '../../libs/characters';
import { wait500 } from '../../libs/wait';
import styles from './styles.module.css';

type Props = {
    activeClass: number;
    path: ClassType;
    setActiveClass: (path: number) => void;
}

export const OtherClasses = ({ activeClass, setActiveClass, path }: Props) => {
    const { setScale } = useCharacterContext();

    const handleClick = async () => {
        if (path.path === activeClass) return;
        setScale(0);
        await wait500();
        setActiveClass(path.path);
    }

    return (
        <div className={styles.otherClasse} onClick={handleClick}>
            <div className={styles.otherImage}>
                <img src={path.portrait} alt="" style={{ filter: activeClass === path.path ? 'grayscale(0%)' : 'grayscale(100%)' }} />
            </div>
            <div
                className={styles.roundPoint}
                style={{
                    backgroundColor: activeClass === path.path ? 'purple' : 'transparent'
                }}>
                <span>⚪</span>
            </div>
        </div>
    )
}