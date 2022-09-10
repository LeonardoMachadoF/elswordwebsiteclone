import styles from './styles.module.css';
import { MouseEvent, ReactNode, useEffect, useState } from 'react';
import Router, { useRouter } from 'next/router';

type Props = {
    label: string;
    icon?: ReactNode;
    setMenuSub?: (e: boolean) => void;
    subItens?: string[];
    sub?: boolean;
    area: string;
    slug: string;
}

export const NavItem = ({ label, icon, sub, subItens, area, slug }: Props) => {
    const [menuSub, setMenuSub] = useState(false);
    const router = useRouter();
    const handleItemClick = (i: string) => {
        router.push(`/${i}`);
    };


    return (

        <div className={styles.item}>
            {!sub &&
                <div className={styles.cont}>
                    <div className={styles.head} onClick={() => handleItemClick(slug)} onMouseEnter={e => setMenuSub(true)} style={{ color: (area === (label.toLowerCase())) ? '#ffb300' : '' }}>{label} {icon}</div>
                </div>

            }
            {sub && subItens &&
                <div className={styles.cont} onMouseLeave={e => setMenuSub(false)}>
                    <div className={styles.head} onMouseEnter={e => setMenuSub(true)} style={{ color: subItens.indexOf(area) > -1 ? '#ffb300' : '' }}>{label} {icon}</div>
                    <div className={styles.sub} style={{ opacity: menuSub ? 1 : 0 }}>
                        {subItens.map((i: string, k: number) => <p onClick={() => handleItemClick(i)} key={`${i}k`} style={{ color: area === i.toLowerCase() ? '#ffb300' : '' }}>{i.toUpperCase()}</p>)}
                    </div>
                </div>
            }
        </div>
    )
}
