import styles from './styles.module.css';
import { CaretDown, MagnifyingGlass } from 'phosphor-react';
import { NavItem } from '../NavItem';
import { useEffect, useState } from 'react';
import Link from 'next/link';

type Props = {
    area: string;
}

export const Header = ({ area }: Props) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuClick = () => {
        setMenuOpen(!menuOpen)
    };

    return (
        <div className={styles.container}>
            <div className={styles.navArea}>
                <Link href={'/'}>
                    <img src="/assets/es-logo.png" alt="" className={styles.logo} />
                </Link>
                <nav className={styles.nav} style={{ marginRight: menuOpen ? 0 : '-100vw', left: menuOpen ? 0 : '100%' }}>
                    <NavItem
                        label='ABOUT'
                        icon={<CaretDown size={16} color="#fff" />}
                        subItens={['game', 'story', 'guides']}
                        sub={true}
                        area={area}
                        slug='about'
                    />
                    <NavItem
                        label='NEWS'
                        area={area}
                        slug='news'
                    />
                    <NavItem
                        label='CHARACTERS'
                        slug='#characters'
                        area={area}
                    />
                    <NavItem
                        label='COMMUNITY'
                        area={area}
                        slug='community'
                        icon={<CaretDown size={16} color="#fff" />}
                        subItens={['gm blog', 'ranking', 'media']}
                        sub={true}
                    />
                    <NavItem
                        label='DOWNLOAD'
                        area={area}
                        slug='download'
                    />
                    <NavItem
                        label='SUPORT'
                        slug='suport'
                        area={area}
                    />
                </nav>
            </div>
            <div className={styles.playArea}>
                <div>
                    LOGIN
                </div>
                <div>
                    <img src="/assets/play-free-button.jpg" alt="" />
                </div>
                <div>
                    <MagnifyingGlass size={16} color="#fff" weight='bold' />
                </div>
            </div>
            <div
                className={styles.hamb}
                style={{ height: '40px', width: '60px', justifyContent: 'space-between', flexDirection: 'column', cursor: 'pointer', alignItems: 'center', paddingTop: '10px', paddingBottom: '10px' }}
                onClick={handleMenuClick}
            >
                <div style={{ backgroundColor: '#ccc', height: '2px', width: '20px' }}></div>
                <div style={{ backgroundColor: '#ccc', height: '2px', width: '20px' }}></div>
                <div style={{ backgroundColor: '#ccc', height: '2px', width: '20px' }}></div>
            </div>
        </div >
    )
}