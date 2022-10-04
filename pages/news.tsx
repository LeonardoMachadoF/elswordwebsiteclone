import { useEffect, useRef, useState } from "react";
import CategoryItemNewsComponent from "../components/CategoryItemNewsComponent";
import Header from "../components/Header";
import styles from '../styles/News.module.css';
import newsJson from '../libs/news.json'
import { NewsType } from "../types/NewsType";
import { NewsItemComponent } from "../components/NewsItemComponent";
import Head from "next/head";

const News = () => {
    const headerRef = useRef<HTMLDivElement | null>(null)
    const newsPerPage = 12;

    const [activeArea, setActiveArea] = useState('All')
    const [page, setPage] = useState(1);
    const [news, setNews] = useState<NewsType[] | []>([]);
    const [numbersOfPage, setNumberOfPages] = useState<number>(Math.floor(newsJson.length / newsPerPage));

    const topItens = [
        { label: 'All', bgColor: '#30333c' },
        { label: 'Notice', bgColor: '#f8424b' },
        { label: 'Event', bgColor: '#ff6a00' },
        { label: 'Item Mall', bgColor: '#710eff' }
    ]

    useEffect(() => {
        let atualIndex = page * newsPerPage - newsPerPage;
        let temporaryNews = [];
        let rawNews: NewsType[] = [];
        for (let i = 0; i < newsPerPage; i++) {
            if (activeArea !== 'All') {
                rawNews = newsJson.filter((news: NewsType) => {
                    if (news.type.split('[')[1].split(']')[0] === activeArea) return news;
                })
            } else {
                rawNews = [...newsJson]
            }
            temporaryNews.push(rawNews[atualIndex])
            atualIndex++
        }
        setNews(temporaryNews)
        setNumberOfPages(Math.floor(rawNews.length / newsPerPage));
    }, [page, activeArea])

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

    const handleActiveArea = (label: string) => {
        setPage(1);
        setActiveArea(label);
    }

    return (
        <div className={styles.container}>
            <Head>
                <title>News | Elsword</title>
            </Head>
            <Header area="news" />
            <div className={styles.mainArea} ref={headerRef}>

                <div className={styles.topArea}>
                    {topItens.map((item) => (
                        <CategoryItemNewsComponent
                            label={item.label}
                            bgColor={item.bgColor}
                            active={item.label.toLowerCase() === activeArea.toLowerCase()}
                            setActiveArea={handleActiveArea}
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
                                categoryColor={topItens.filter((i) => {
                                    if (i.label === news.type.split('[')[1].split(']')[0]) {
                                        return i
                                    }
                                })[0].bgColor}
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