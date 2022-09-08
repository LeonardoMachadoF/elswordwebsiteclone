import styles from '../styles/Game.module.css';
import { Header } from "../components/Header";
import { ItemOfGamePage } from '../components/ItemOfGamePage';

const Game = () => {
    return (
        <div className={styles.container}>
            <Header area={'game'} />
            <ItemOfGamePage
                imageUrl='/assets/about-section-1.jpg'
                title='ELSWORD IS A FREE-TO-PLAY HACK AND SLASH ONLINE ACTION MMORPG'
                subtitle='PLAY YOUR MANGA'
                description=' Enter the world of Elrios for epic action and adventure, where you will experience expansive world building and engaging storyline.'
            />
            <ItemOfGamePage
                imageUrl='/assets/section-2.jpg'
                title='Immerse yourself into the origins of El'
                description='Discover how El came to be and learn about the history that shaped the Elrios of today – hundreds of years before the El Search Party set out on their journey.'
                left={true}
            />
        </div>
    )
}


export default Game;