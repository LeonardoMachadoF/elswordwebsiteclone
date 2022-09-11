import { useScaleContext } from '../../contexts/opacity/context';
import { ClassType } from '../../libs/characters';
import styles from './styles.module.css';

type Props = {
    activeClass: number;
    path: ClassType;
    setActiveClass: (path: number) => void;
}

export const OtherClasses = ({ activeClass, setActiveClass, path }: Props) => {
    const { setScale } = useScaleContext();

    const handleClick = async () => {
        setScale(0);
        await new Promise((resolve) => setTimeout(resolve, 300));
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