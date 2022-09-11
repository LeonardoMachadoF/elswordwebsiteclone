import styles from '../../styles/SelectCharacters.module.css';
import { Header } from "../../components/Header";
import { useState } from 'react';
import { SelectCharactersItemsOption } from '../../components/SelectCharactersItemsOption';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { CaretDoubleRight } from 'phosphor-react';
import { ItemComponentGuide } from '../../components/ItemComponentGuide';
import { ItemComponent } from '../../components/ItemComponent';

const SelectCharacters = () => {
    const router = useRouter();
    const pageOne = ['select-characters', 'attendance-event', 'prof-phoru-growth-guide', 'mentor-pupil-system', 'steam'];

    return (
        <div className={styles.container}>
            <Header area="about" />
            <div className={styles.mainArea}>
                <div className={styles.mainHeader}>
                    <div className={styles.duo}>
                        <div
                            className={styles.img}
                            style={{ filter: pageOne.indexOf(router.asPath.split('/')[2]) > -1 ? 'grayscale(0%)' : 'grayscale(100%)' }}
                        >
                            <Link href={'/guides/select-characters'}>
                                <img src="/assets/thumb-getting-started.png" alt="" />
                            </Link>
                        </div>
                        <div className={styles.img} style={{ filter: router.asPath.split('/')[2] === 'item-mall-security' ? 'grayscale(0%)' : 'grayscale(100%)' }}>
                            <Link href={'/guides/item-mall-security'}>
                                <img src="/assets/thumb-itemmall-security.png" alt="" />
                            </Link>
                        </div>
                    </div>

                    {pageOne.indexOf(router.asPath.split('/')[2]) > -1 &&
                        <SelectCharactersItemsOption />
                    }


                    <div>

                        <div className={styles.timeline}>
                            <div>
                                ELSWORD
                                <CaretDoubleRight size={12} color="#050505" />
                                Guides
                                <CaretDoubleRight size={12} color="#050505" />
                                {router.asPath.split('/')[2].split('-').map((i: string, k: number) => {
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

                        <ItemComponentGuide />




                        {pageOne.indexOf(router.asPath.split('/')[2]) > -1 &&
                            <SelectCharactersItemsOption />
                        }

                    </div>

                </div>
            </div>
        </div>
    )
}

export default SelectCharacters;