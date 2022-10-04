import styles from '../../styles/SelectCharacters.module.css';
import Header from "../../components/Header";
import { SelectCharactersItemsOption } from '../../components/SelectCharactersItemsOption';
import Link from 'next/link';
import { CaretDoubleRight } from 'phosphor-react';
import { ItemComponentGuide } from '../../components/ItemComponentGuide';
import Head from 'next/head';
import { MallItemsOptions } from '../../components/MallItemsOptions';
import { GetStaticPaths, GetStaticProps } from 'next';
import guides from '../../libs/guides.json'
import { PostType } from '../../types/PostType';

export const getStaticPaths: GetStaticPaths = async () => {
    const pages = ['select-characters', 'attendance-event', 'prof-phoru-growth-guide', 'mentor-pupil-system', 'steam', 'item-mall-security', 'security-pin-system', 'account-secure', 'restoration-policy'];

    let array: { params: { slug: string } }[] = [];
    pages.map(i => array.push({ params: { slug: i } }))
    const paths = array;

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async (context) => {
    let posts: PostType[] = [];
    guides.map((i) => {
        if (Object.keys(i)[0] === context.params!.slug && Object.keys(i)[0] !== undefined) {
            posts.push(Object.values(i)[0]);
        }
    })
    return {
        props: {
            slug: context.params!.slug,
            posts: posts[0]
        }
    }
}

type Props = {
    slug: string,
    posts: PostType[]
}

const SelectCharacters = ({ slug, posts }: Props) => {
    const pageOne = ['select-characters', 'attendance-event', 'prof-phoru-growth-guide', 'mentor-pupil-system', 'steam'];
    const pageTwo = ['item-mall-security', 'security-pin-system', 'account-secure', 'restoration-policy']
    console.log(posts)
    return (
        <div className={styles.container}>
            <Head>
                <title>Elsword - Guides</title>
            </Head>

            <Header area="about" />
            <div className={styles.mainArea}>
                <div className={styles.mainHeader}>
                    <div className={styles.duo}>
                        <div
                            className={styles.img}
                            style={{ filter: pageOne.indexOf(slug) > -1 ? 'grayscale(0%)' : 'grayscale(100%)' }}
                        >
                            <Link href={'/guides/select-characters'}>
                                <img src="/assets/thumb-getting-started.png" alt="" />
                            </Link>
                        </div>
                        <div className={styles.img} style={{ filter: pageTwo.indexOf(slug) > -1 ? 'grayscale(0%)' : 'grayscale(100%)' }}>
                            <Link href={'/guides/item-mall-security'}>
                                <img src="/assets/thumb-itemmall-security.png" alt="" />
                            </Link>
                        </div>
                    </div>

                    {pageOne.indexOf(slug) > -1 &&
                        <SelectCharactersItemsOption slug={slug} />
                    }
                    {pageTwo.indexOf(slug) > -1 &&
                        <MallItemsOptions />
                    }

                    <div>

                        <div className={styles.timeline}>
                            <div>
                                ELSWORD
                                <CaretDoubleRight size={12} color="#050505" />
                                Guides
                                <CaretDoubleRight size={12} color="#050505" />
                                {slug.split('-').map((i: string, k: number) => {
                                    return (
                                        <span
                                            style={{ marginLeft: '4px' }}
                                            key={k}
                                        >
                                            {i[0].toUpperCase()}{i.substring(1)}
                                        </span>
                                    )
                                })}
                            </div>
                        </div>

                        <ItemComponentGuide slug={slug} posts={posts} />

                        {pageOne.indexOf(slug) > -1 &&
                            <SelectCharactersItemsOption slug={slug} />
                        }

                    </div>

                </div>
            </div>
        </div>
    )
}

export default SelectCharacters;