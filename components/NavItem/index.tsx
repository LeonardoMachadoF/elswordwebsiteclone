import styles from './styles.module.css';
import { ReactNode, useEffect, useState } from 'react';

type Props = {
    label: string;
    icon?: ReactNode;
    setMenuSub?: (e: boolean) => void;
    subItens?: string[];
    sub?: boolean;
    area: string;
}

export const NavItem = ({ label, icon, sub, subItens, area }: Props) => {
    const [menuSub, setMenuSub] = useState(false);

    return (
        <div className={styles.item}>
            {!sub &&
                <div className={styles.cont}>
                    <div className={styles.head} onMouseEnter={e => setMenuSub(true)} style={{color: (area === (label.toLowerCase())) ? '#ffb300' : ''}}>{label} {icon}</div>
                </div>

            }
            {sub && subItens &&
                <div className={styles.cont} onMouseLeave={e => setMenuSub(false)}>
                    <div className={styles.head} onMouseEnter={e => setMenuSub(true)} style={{color: subItens.indexOf(area) > -1 ? '#ffb300' : ''}}>{label} {icon}</div>
                    <div className={styles.sub} style={{ opacity: menuSub ? 1 : 0 }}>
                        {subItens.map((i: string, k: number) => <p key={`${i}k`} style={{color: area === i.toLowerCase() ? '#ffb300' : ''}}>{i.toUpperCase()}</p>)}
                    </div>
                </div>
            }
        </div>
    )
}
