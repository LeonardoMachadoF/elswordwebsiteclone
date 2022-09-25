import styles from '../styles/Rankings.module.css';
import { Banner } from "../components/Banner";
import Header from "../components/Header";
import { GetServerSideProps } from 'next';
import { getRankings } from '../libs/getRankings';
import { CharacterRankType } from '../types/CharacterRankType';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { getAllClasses } from '../libs/characters';
import { useEffect, useState } from 'react';

const Rankings = (rankings: Props) => {
    const router = useRouter();

    const [category, setCategory] = useState(rankings.type.substring(0, 3));
    const [server, setServer] = useState(rankings.type.substring(3, 5));
    const [character, setCharacter] = useState(rankings.char);

    useEffect(() => {
        router.push(`/rankings?page=${parseInt(rankings.page)}&limit=${parseInt(rankings.limit)}&type=${category.toLowerCase()}${server.toLowerCase()}&char=${character.split(' ').join('-').toLowerCase()}`)
    }, [category, server, character])

    const handleFirstClick = () => {
        router.push(`/rankings?page=${1}&limit=${parseInt(rankings.limit)}&type=${rankings.type}&char=${rankings.char}`)
    }

    const handleNextClick = () => {
        router.push(`/rankings?page=${parseInt(rankings.page) + 1}&limit=${parseInt(rankings.limit)}&type=${rankings.type}&char=${rankings.char}`)
    }

    const handleBeforeClick = () => {
        if (parseInt(rankings.page) > 1)
            router.push(`/rankings?page=${parseInt(rankings.page) - 1}&limit=${parseInt(rankings.limit)}&type=${rankings.type}&char=${rankings.char}`)
    }
    return (
        <div className={styles.container}>
            <Head>
                <title>Elsword - Rankings</title>
            </Head>
            <Header area="rankings" />
            <Banner banners={['/assets/mh-playerrankings.jpg']} />
            <div className={styles.contentArea}>
                <div className={styles.filter}>
                    <div className={styles.leftArea}>
                        <div className={styles.category}>
                            <p>CATEGORY: </p>
                            <select name="" onChange={e => setCategory(e.target.value)}>
                                <option value="pvp">
                                    PVP
                                </option>e
                                <option value="pve">
                                    PVE
                                </option>
                            </select>
                        </div>
                        <div className={styles.server}>
                            <p>SERVER: </p>
                            <select name="" id="" onChange={e => setServer(e.target.value)}>
                                <option value="na">
                                    NA
                                </option>
                                <option value="int">
                                    INT
                                </option>
                            </select>
                        </div>
                        <div className={styles.character}>
                            <p>CHARACTER: </p>
                            <select name="" id="" onChange={e => setCharacter(e.target.value)}>
                                <option value="">All</option>
                                {rankings.classes.map((c: string) => (
                                    <option key={c} value={c.toLowerCase()}>{c}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className={styles.rightArea}>
                        <p>SEARCH: </p>
                        <input type="text" name="" id="" />
                    </div>
                </div>
                <div className={styles.lastUptade}>
                    <div className={styles.lastRightArea}>
                        <p className={styles.firstP}>Last Updated: Sun, 25 Sep 2022 00:30:01 GMT</p>
                        <p className={styles.secondP}>Note: The ranking page only allows for up to 2,000 players to be shown.</p>
                    </div>
                </div>
                {!rankings.error &&
                    <main className={styles.main}>
                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    <th className={styles.rank}>Rank</th>
                                    <th className={styles.name}>Character Name</th>
                                    <th className={styles.class}>Class</th>
                                    <th className={styles.level}>Level</th>
                                    <th className={styles.pvprank}>PVP Rank</th>
                                    <th className={styles.wins}>Wins</th>
                                </tr>
                            </thead>
                            <tbody>
                                {rankings.data?.map((char: CharacterRankType) => {
                                    return (
                                        <tr key={`${char.rank}-${char.name}`} style={{ color: 'black' }}>
                                            <td>
                                                {char.rank.indexOf('.') > -1 ? <img src={char.rank} alt="" style={{ height: '80px' }} /> : `${char.rank}`}
                                            </td>
                                            <td style={{ display: 'flex', alignItems: 'center', paddingLeft: '100px', gap: '8px' }}>
                                                <img src={char.img} alt="" />
                                                {char.name}
                                            </td>
                                            <td>{char.classe}</td>
                                            <td>{char.level}</td>
                                            <td>
                                                <img src={char.pvpRank} alt="" />
                                            </td>
                                            <td>{char.wins}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>

                        <div className={styles.nav}>
                            <div className={styles.before} onClick={handleFirstClick}>First</div>
                            <div className={styles.before} onClick={handleBeforeClick}>Before</div>
                            <div className={styles.next} onClick={handleNextClick}>Next</div>
                        </div>
                    </main>
                }
            </div>

        </div >
    )
}

export default Rankings;

type Props = {
    data: CharacterRankType[] | null;
    page: string;
    limit: string;
    type: string;
    classes: string[];
    error: boolean;
    char: string;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
    let { page, limit, type, char } = context.query;

    if (!page) {
        page = "1";
    }
    if (!limit) {
        limit = "12"
    }
    if (!type) {
        type = 'pvpna'
    }
    if (!char) {
        char = 'all'
    }

    let data = await getRankings.getPvpNaRankings(page as string, limit as string, type as string, char as string);

    if (!page) {
        page = '1';
    }

    let classes = getAllClasses();

    if (!data) {
        return {
            props: {
                data,
                page,
                limit,
                type,
                classes,
                error: true,
                char
            }
        }
    }

    return {
        props: {
            data,
            page,
            limit,
            type,
            classes,
            error: false,
            char
        }
    }
} 