import { ClassType } from '../../libs/characters';
import styles from './styles.module.css';

type Props = {
    activeClass: number;
    path: ClassType;
    setActiveClass: (path: number) => void;
}

export const OtherClasses = ({ activeClass, setActiveClass, path }: Props) => {
    const handleClick = (path: number) => {
        setActiveClass(path);
        window.scrollTo(0, (window.scrollY - 200));
    }

    return (
        <div className={styles.otherClasse} onClick={() => handleClick(path.path)}>
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