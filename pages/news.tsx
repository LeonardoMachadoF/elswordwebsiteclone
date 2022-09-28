import { useEffect, useState } from "react";
import CategoryItemNewsComponent from "../components/CategoryItemNewsComponent";
import Header from "../components/Header";
import styles from '../styles/News.module.css';
import newsJson from '../libs/news.json'
import { NewsType } from "../types/NewsType";
import { NewsItemComponent } from "../components/NewsItemComponent";

const News = () => {
    const [activeArea, setActiveArea] = useState('All')
    const [page, setPage] = useState(2);
    const [news, setNews] = useState<NewsType[] | []>([]);
    const newsPerPage = 12;

    const topItens = [
        { label: 'All', bgColor: '#30333c' },
        { label: 'Notice', bgColor: '#30333c' },
        { label: 'Event', bgColor: '#30333c' },
        { label: 'Item Mall', bgColor: '#30333c' }
    ]

    useEffect(() => {
        let atualIndex = page * newsPerPage - newsPerPage;
        let temporaryNews = [];
        for (let i = 0; i < newsPerPage; i++) {
            temporaryNews.push(newsJson[atualIndex])
            atualIndex++
        }
        setNews(temporaryNews)
    }, [page])

    return (
        <div className={styles.container}>
            <Header area="news" />
            <div className={styles.mainArea}>

                <div className={styles.topArea}>
                    {topItens.map((item) => (
                        <CategoryItemNewsComponent
                            label={item.label}
                            bgColor={item.bgColor}
                            active={item.label.toLowerCase() === activeArea.toLowerCase()}
                            setActiveArea={setActiveArea}
                            key={item.label}
                        />
                    ))}
                </div>

                <div className={styles.grid}>
                    {news &&
                        news.map((news: NewsType) => (
                            <NewsItemComponent
                                key={news.title}
                                news={news}
                            />
                        ))
                    }
                </div>

            </div>

            <div className={styles.navigation}>
                <div onClick={() => setPage(page - 1)}>BEFORE</div>
                <div onClick={() => setPage(page + 1)}>NEXT</div>
            </div>


            <div className={styles.bg}></div>
        </div>
    )
};

export default News;