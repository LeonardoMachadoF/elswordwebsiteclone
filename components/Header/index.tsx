import styles from './styles.module.css';
import { CaretDown, MagnifyingGlass } from 'phosphor-react';
import { NavItem } from '../NavItem';
import { useEffect, useState } from 'react';

export const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuClick = () => {
        setMenuOpen(!menuOpen)
    };

    return (
        <div className={styles.container}>
            <div className={styles.navArea}>
                <img src="/assets/es-logo.png" alt="" className={styles.logo} />
                <nav className={styles.nav} style={{ marginRight: menuOpen ? 0 : '-100vw', left: menuOpen ? 0 : '100%' }}>
                    <NavItem
                        label='ABOUT'
                        icon={<CaretDown size={16} color="#fff" />}
                        subItens={['game', 'story', 'guides']}
                        sub={true}
                    />
                    <NavItem label='NEWS' />
                    <NavItem label='CHARACTERS' />
                    <NavItem
                        label='COMMUNITY'
                        icon={<CaretDown size={16} color="#fff" />}
                        subItens={['gm blog', 'ranking', 'media']}
                        sub={true}
                    />
                    <NavItem label='DOWNLOAD' />
                    <NavItem label='SUPORT' />
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