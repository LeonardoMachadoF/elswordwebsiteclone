import styles from './styles.module.css';
import { CaretDown, MagnifyingGlass } from 'phosphor-react';
import { NavItem } from '../NavItem';

export const Header = () => {
    return (
        <div className={styles.container}>
            <div className={styles.navArea}>
                <img src="/assets/es-logo.png" alt="" className={styles.logo} />
                <nav className={styles.nav}>
                    <NavItem label='ABOUT' icon={<CaretDown size={16} color="#fff" />} />
                    <NavItem label='NEWS' />
                    <NavItem label='CHARACTERS' />
                    <NavItem label='COMMUNITY' icon={<CaretDown size={16} color="#fff" />} />
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
        </div>
    )
}