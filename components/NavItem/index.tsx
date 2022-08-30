import styles from './styles.module.css';
import { ReactNode } from 'react';

type Props = {
    label: string;
    icon?: ReactNode;
}

export const NavItem = ({ label, icon }: Props) => {
    return (
        <div className={styles.item}>
            {label} {icon}
        </div>
    )
}
