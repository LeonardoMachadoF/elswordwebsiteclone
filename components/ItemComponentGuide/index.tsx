import styles from './styles.module.css';
import { ItemComponent } from '../ItemComponent';
import { useRouter } from 'next/router';

export const ItemComponentGuide = () => {
    const router = useRouter();
    return (
        <div className={styles.container}>
            {router.asPath.split('/')[2] === 'select-characters' &&
                <>
                    <ItemComponent
                        tipLogo='/assets/1.png'
                        tip='When you first log in to Elsword, you will be welcomed to the Character Creation Screen with over 14 characters to choose from!'
                        imageUrl='/assets/img-select-character-1.jpg'
                    />
                    <ItemComponent
                        tipLogo='/assets/2.png'
                        tip='You can access the New Player Attendance Event by clicking this icon on top of the screen!'
                        imageUrl='/assets/img-select-character-2.jpg'
                    />
                    <ItemComponent
                        tipLogo='/assets/3.png'
                        tip='You can initially create 15 characters on each account! You can create even more characters by purchasing additional character slots'
                        imageUrl='/assets/img-select-character-3.jpg'
                    />
                    <ItemComponent
                        tipLogo='/assets/4.png'
                        tip='TIP: Make sure you don’t skip the tutorial! You’ll gain at least 5 levels!'
                        imageUrl='/assets/img-select-character-4.jpg'
                    />
                </>
            }

            {router.asPath.split('/')[2] === 'attendance-event' &&
                <>
                    <ItemComponent
                        tipLogo='/assets/1.png'
                        tip='All new players can obtain rewards to help jump start your adventure just by logging in'
                        imageUrl='/assets/img-attendance-event-1.jpg'
                    />
                    <ItemComponent
                        tipLogo='/assets/2.png'
                        tip='You can access the New Player Attendance Event by clicking this icon on top of the screen!'
                        imageUrl='/assets/img-attendance-event-2.jpg'
                    />
                    <ItemComponent
                        tipLogo='/assets/3.png'
                        tip='Just login daily for 30 minutes and you’ll automatically get your rewards via inventory!'
                        imageUrl='/assets/img-attendance-event-3.jpg'
                    />
                </>
            }

            {router.asPath.split('/')[2] === 'prof-phoru-growth-guide' &&
                <>
                    <ItemComponent
                        tipLogo='/assets/1.png'
                        tip='Follow Prof. Phoru Growth Guide for a step-by-step instruction in powering up your character.'
                        imageUrl='/assets/img-phoru-guide-1.jpg'
                    />
                    <ItemComponent
                        tipLogo='/assets/2.png'
                        tip='Prof. Phoru Growth Guide is easy to follow and is available per character!'
                        imageUrl='/assets/img-phoru-guide-3.jpg'
                    />
                    <ItemComponent
                        tipLogo='/assets/3.png'
                        tip='Complete each quest to obtain rewards that are helpful in your adventure such as equipment and other support items!'
                        imageUrl='/assets/img-phoru-guide-3.jpg'
                    />
                </>
            }

            {router.asPath.split('/')[2] === 'mentor-pupil-system' &&
                <>
                    <ItemComponent
                        tipLogo='/assets/1.png'
                        tip='You can start looking for mentors to help your journey immediately once you’ve arrived at your first village!'
                        imageUrl='/assets/img_mentorpupil_01.jpg'
                    />
                    <ItemComponent
                        tipLogo='/assets/2.png'
                        tip='Press 0 or click the Community icon.'
                        imageUrl='/assets/img_mentorpupil_02.jpg'
                    />
                    <ItemComponent
                        tipLogo='/assets/3.png'
                        tip='Find the Mentor and Pupil Tab, then click “Mentor Search Request” which will generate a server-wide announcement'
                        imageUrl='/assets/img_mentorpupil_03.jpg'
                    />
                    <ItemComponent
                        tipLogo='/assets/4.png'
                        tip='Check your chat box to see if players are interested in becoming your Mentor.'
                        imageUrl='/assets/img_mentorpupil_04.jpg'
                    />
                    <ItemComponent
                        tipLogo='/assets/5.png'
                        tip='You can also ask other players directly by right-click and finding the ‘Request Mentorship’ option.'
                        imageUrl='/assets/img_mentorpupil_05.jpg'
                    />
                </>
            }

            {router.asPath.split('/')[2] === 'steam' &&
                <>
                    <ItemComponent
                        tipLogo='/assets/1.png'
                        tip='Go to the Elsword Page on Steam and click the “Play Game” button.'
                        imageUrl='/assets/img-steam-1.jpg'
                    />
                    <ItemComponent
                        tipLogo='/assets/2.png'
                        tip='Choose the directory location where you want the game client installed and click ‘Next.’'
                        imageUrl='/assets/img-steam-2.jpg'
                    />
                    <ItemComponent
                        tipLogo='/assets/3.png'
                        tip='Wait for the disk allocation to be completed and the download will begin!'
                        imageUrl='/assets/img-steam-3.jpg'
                    />
                    <ItemComponent
                        tipLogo='/assets/4.png'
                        tip='You can check the download status from the Steam Games Library.'
                        imageUrl='/assets/img-steam-4.jpg'
                    />
                    <ItemComponent
                        tipLogo='/assets/5.png'
                        tip='After the download is completed, click the “Play” button to bring up the Login or Register prompt.'
                        imageUrl='/assets/img-steam-5.jpg'
                    />
                    <ItemComponent
                        tipLogo='/assets/6.png'
                        tip='Logging in with an existing account will automatically link your Elsword account to Steam!'
                        imageUrl=''
                    />
                </>
            }

        </div>
    )
}