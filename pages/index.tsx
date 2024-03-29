import type { NextPage } from 'next'
import Head from 'next/head'
import { ArrowCircleLeft, ArrowCircleRight } from 'phosphor-react'
import { useState } from 'react'
import { Banner } from '../components/Banner'
import { Characters } from '../components/Characters'
import Header from '../components/Header'
import { NewsAndGuides } from '../components/NewsAndGuides'
import { NewsItem } from '../components/NewsItem';
import ParticlesComponent from '../components/Particles';
import styles from '../styles/Home.module.css';
import Image from 'next/image'

const Home: NextPage = () => {
    const [lMargin, setLMargin] = useState(0);

    const handleClick = () => {
        lMargin === -100 ? setLMargin(0) : setLMargin(-100);
    }

    return (
        <div className={styles.container}>
            <Head>
                <title>Elsword - Clone Website</title>
                <meta name="description" content="Site feito com o proposito de treinar minhas habilidade em react/next" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header area='home' />
            <Banner banners={['/assets/banner01.jpg', '/assets/rena-4th.jpg', '/assets/cool.jpg']} />
            <main className={styles.mainArea}>
                <div className={styles.newsAndUpdates}>
                    <div className={styles.label}>NEWS & UPDATES</div>
                    <div className={styles.mainNewsAndUpdates}>
                        <div className={styles.announcements}>
                            <div className={styles.announcementsTitle}>ANNOUNCEMENTS</div>
                            <div className={styles.news}>
                                <NewsItem type='Event' title='2022 Summer Special Events' />
                                <NewsItem type='Item Mall' title='New Noah IB: Nereid + Nereid Eye' />
                                <NewsItem type='Notice' title='August 24th Patch Notes' />
                                <NewsItem type='Notice' title=' [Announcement] Dungeon Bug Fixed' />
                                <NewsItem type='Event' title='Weekend Event 2' />
                                <NewsItem type='Event' title='Class Change Chance! Event' />
                                <NewsItem type='Item Mall' title='Costume Premium Package Resale' />
                            </div>
                        </div>
                        <NewsAndGuides category='NEWS' imageUrl='/assets/news.jpg' />
                        <NewsAndGuides category='GUIDES' imageUrl='   /assets/banner-guides.jpg' />
                    </div>
                </div>
                <div id='characters'><Characters /></div>
            </main>

            <div className={styles.background} />
            <ParticlesComponent />

            <div className={styles.othersArea}>
                <div className={styles.gc} style={{ marginLeft: `${lMargin}vw` }}>
                    <img src="/assets/gc-banner.png" alt="" />
                    <img src="/assets/kurtz-banner.jpg" alt="" />
                    <ArrowCircleLeft
                        size={26}
                        color="#fff"
                        className={styles.arrowLeft}
                        // style={{ cursor: 'pointer', position: 'relative', top: '-130px', backgroundColor: 'black', borderRadius: '50%' }}
                        onClick={handleClick}
                    />
                    <ArrowCircleRight
                        size={26}
                        color="#fff"
                        className={styles.arrowRight}
                        // style={{ cursor: 'pointer', position: 'relative', top: '-130px', backgroundColor: 'black', borderRadius: '50%' }}
                        onClick={handleClick}
                    />
                </div>

            </div>
        </div>
    )
}

export default Home
