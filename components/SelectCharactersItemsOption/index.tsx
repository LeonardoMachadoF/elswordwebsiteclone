import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './styles.module.css';

export const SelectCharactersItemsOption = () => {
    const router = useRouter();

    return (
        <div className={styles.mainItems}>
            <Link href={'/guides/select-characters'}>
                <img
                    src="/assets/btn-select-character-on.png"
                    alt=""
                    style={{ filter: router.asPath.split('/')[2] === 'select-characters' ? 'grayscale(0%)' : 'grayscale(100%)' }}
                />
            </Link>
            <Link href={'/guides/attendance-event'}>
                <img
                    src="/assets/btn-attendance-on.png"
                    alt=""
                    style={{ filter: router.asPath.split('/')[2] === 'attendance-event' ? 'grayscale(0%)' : 'grayscale(100%)' }}
                />
            </Link>
            <Link href={'/guides/prof-phoru-growth-guide'}>
                <img
                    src="/assets/btn-phoru-growth-on.png"
                    alt=""
                    style={{ filter: router.asPath.split('/')[2] === 'prof-phoru-growth-guide' ? 'grayscale(0%)' : 'grayscale(100%)' }}
                />
            </Link>
            <Link href={'/guides/mentor-pupil-system'}>
                <img
                    src="/assets/btn-mentorpupil-on.png"
                    alt=""
                    style={{ filter: router.asPath.split('/')[2] === 'mentor-pupil-system' ? 'grayscale(0%)' : 'grayscale(100%)' }}
                />
            </Link>
            <Link href={'/guides/steam'}>
                <img
                    src="/assets/btn-steam-on.png"
                    alt=""
                    style={{ filter: router.asPath.split('/')[2] === 'steam' ? 'grayscale(0%)' : 'grayscale(100%)' }}
                />
            </Link>

        </div>
    )
}