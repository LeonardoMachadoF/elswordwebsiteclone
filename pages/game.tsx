import styles from '../styles/Game.module.css';
import Header from "../components/Header";
import { ItemOfGamePage } from '../components/ItemOfGamePage';
import Head from 'next/head';

const Game = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Elsword - Game</title>
            </Head>

            <Header area={'about'} />
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
                buttonTitle='Learn More'
                left={true}
            />
            <ItemOfGamePage
                imageUrl='/assets/section-3.jpg'
                title='SELECT FROM A WIDE VARIETY OF CHARACTERS WITH DIFFERENT STYLE'
                subtitle='CHOOSE YOUR PATH'
                description='Choose a character that matches with your individual playstyle from our massive character roster! Each character is different and unique. You’ll surely find the character that’s perfect for you.'
            />
            <ItemOfGamePage
                imageUrl='/assets/about-section-4.jpg'
                title='EXPLORE AND PROGRESS'
                subtitle='DUNGEONS'
                description='Traverse dungeons and fight enemies to progress through the storyline and unravel the many mysteries surrounding Elrios! You also get to haul in epic loot that you can use to make yourself even stronger.'
                left={true}
            />
            <ItemOfGamePage
                imageUrl='/assets/about-section-5.jpg'
                title='MAKE THE WORLD YOUR RUNWAY SHOW'
                subtitle='DRESS TO IMPRESS'
                description='Show off your fashion sense as it’s the clothes that make the hero! Mix and match different pieces of clothing to exhibit your unique style with special set effect to boost your power to boot!'
            />
            <ItemOfGamePage
                imageUrl='/assets/about-section-6.jpg'
                title='TAKE ON THE CHALLENGE'
                subtitle='RAIDS'
                description='Team up or go solo to face formidable enemies in an epic battle. Your courage and strength will be rewarded with great rewards.'
                left={true}
            />
            <ItemOfGamePage
                imageUrl='/assets/about-section-7.jpg'
                title='GO HEAD-TO-HEAD AGAINST ANOTHER PLAYER'
                subtitle='PVP'
                description='Test your skills against other players in individual or team matches. Rise in the Elsword’s PVP ranks for glory, gold and various in-game rewards or participate in a PvP tournament to bring home the prize.'
            />

            <div className={styles.play}>
                <img src="/assets/play-free.jpg" alt="" />
            </div>
        </div>
    )
}

export default Game;
