import { useEffect, useRef, useState } from "react";
import CategoryItemNewsComponent from "../components/CategoryItemNewsComponent";
import Header from "../components/Header";
import styles from '../styles/News.module.css';
import newsJson from '../libs/news.json'
import { NewsType } from "../types/NewsType";
import { NewsItemComponent } from "../components/NewsItemComponent";

const News = () => {
    const headerRef = useRef<HTMLDivElement | null>(null)

    const [activeArea, setActiveArea] = useState('All')
    const [page, setPage] = useState(1);
    const [news, setNews] = useState<NewsType[] | []>([]);
    const newsPerPage = 12;
    const numbersOfPage = Math.floor(newsJson.length / newsPerPage);

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

    const handleBeforeClick = () => {
        if (page > 1) {
            setPage(page - 1)
            headerRef.current!.scrollIntoView({ behavior: 'smooth' })
        }
    }
    const handleNextClick = () => {
        if (page !== numbersOfPage) {
            setPage(page + 1)
            headerRef.current!.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <div className={styles.container}>
            <Header area="news" />
            <div className={styles.mainArea} ref={headerRef}>

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
                <div onClick={handleBeforeClick}>BEFORE</div>
                <div onClick={handleNextClick}>NEXT</div>
            </div>


            <div className={styles.bg}></div>
        </div>
    )
};

export default News;