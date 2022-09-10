import { CaretLeft, CaretRight } from "phosphor-react";
import { useState } from "react";
import { Header } from "../components/Header";
import { StoryItem } from "../components/StoryItem";
import { stories, Story } from "../libs/stories";
import styles from '../styles/Story.module.css'

const Story = () => {
    const [activeItem, setActiveItem] = useState(1);

    const handleLeftClick = () => {
        (activeItem > 1) ? setActiveItem(activeItem - 1) : setActiveItem(stories.length);
    };
    const handleRightClick = () => {
        (activeItem < stories.length) ? setActiveItem(activeItem + 1) : setActiveItem(1);
    }

    return (
        <div className={styles.container}>
            <Header area="story" />
            <div className={styles.stories}>
                <div className={styles.carrousel} style={{ marginLeft: `${-((activeItem - 1) * 100)}%` }}>
                    {stories.map((s: Story) => {
                        return (
                            <StoryItem key={s.id} imageUrl={s.imageUrl} title={s.title} desc={s.desc} id={s.id} activeItem={activeItem} />
                        )
                    })}
                </div>
            </div>
            <div className={styles.arrows}>
                <div className={styles.arrowLeft} onClick={handleLeftClick}>
                    <CaretLeft size={16} color="#ffffff" weight="bold" />
                </div>
                <div className={styles.numberArea}>
                    <div>{activeItem}</div>
                    <div style={{ height: '40px', backgroundColor: '#000', width: '3px' }}></div>
                    <div>{stories.length}</div>
                </div>
                <div className={styles.arrowRight} onClick={handleRightClick}>
                    <CaretRight size={16} color="#ffffff" weight="bold" />
                </div>
            </div>
        </div>
    );
};

export default Story;