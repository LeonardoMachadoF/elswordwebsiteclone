import { memo } from 'react';
import styles from './styles.module.css';

type Props = {
    label: string;
    active: boolean;
    bgColor: string;
    setActiveArea: (label: string) => void;
}

const CategoryItemNewsComponent = ({ label, active, bgColor, setActiveArea }: Props) => {


    return (
        <div
            className={styles.container}
            style={{ color: active ? '#fff' : '#edb059', backgroundColor: active ? bgColor : "#fff" }}
            onClick={() => setActiveArea(label)}
        >
            {label.toUpperCase()}
        </div>
    )
}

export default memo(CategoryItemNewsComponent);
