import styles from '../styles/Rankings.module.css';
import { Banner } from "../components/Banner";
import { Header } from "../components/Header";
import { GetServerSideProps } from 'next';
import { getRankings } from '../libs/getRankings';
import { CharacterRankType } from '../types/CharacterRankType';
import { useRouter } from 'next/router';

const Rankings = (rankings: Props) => {
    const router = useRouter();

    const handleNextClick = () => {
        router.push(`/rankings?page=${parseInt(rankings.page) + 1}&limit=${parseInt(rankings.limit)}&type=${rankings.type}`)
    }
    return (
        <div className={styles.container}>
            <Header area="rankings" />
            <Banner banners={['/assets/mh-playerrankings.jpg']} />
            {!rankings.error &&
                <main className={styles.main}>
                    {rankings.data?.map((char: CharacterRankType) => {
                        return (
                            <div key={`${char.rank}-${char.name}`} style={{ color: 'black' }}>
                                {char.name} {char.rank}
                            </div>
                        )
                    })}
                </main>
            }
            <button onClick={handleNextClick}>Next</button>
        </div >
    )
}

export default Rankings;

type Props = {
    data: CharacterRankType[] | null;
    page: string;
    limit: string;
    type: string;
    error?: boolean;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
    let { page, limit, type } = context.query;

    if (!page) {
        page = "1";
    }
    if (!limit) {
        limit = "12"
    }
    if (!type) {
        type = 'pvpna'
    }

    let data = await getRankings.getPvpNaRankings(page as string, limit as string, type as string);

    if (!page) {
        page = '1';
    }

    if (!data) {
        return {
            props: {
                data,
                page,
                limit,
                type,
                error: true
            }
        }
    }

    return {
        props: {
            data,
            page,
            limit,
            type
        }
    }
} 