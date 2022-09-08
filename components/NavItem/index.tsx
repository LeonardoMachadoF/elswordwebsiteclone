import styles from './styles.module.css';
import { ReactNode, useEffect, useState } from 'react';

type Props = {
    label: string;
    icon?: ReactNode;
    setMenuSub?: (e: boolean) => void;
    subItens?: string[];
    sub?: boolean;
}

export const NavItem = ({ label, icon, sub, subItens }: Props) => {
    const [menuSub, setMenuSub] = useState(false);

    return (
        <div className={styles.item}>
            {!sub &&
                <div className={styles.head} onMouseEnter={e => setMenuSub(true)}>{label} {icon}</div>
            }
            {sub && subItens &&
                <div onMouseEnter={e => setMenuSub(true)} onMouseLeave={e => setMenuSub(false)}>
                    <div className={styles.head}>{label} {icon}</div>
                    <div className={styles.sub} style={{ opacity: menuSub ? 1 : 0 }}>
                        {subItens.map((i: string, k: number) => <p key={`${i}k`}>{i.toUpperCase()}</p>)}
                    </div>
                </div>
            }
        </div>
    )
}
