import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './styles.module.css';

type Props = {
    slug: string;
}

export const SelectCharactersItemsOption = ({ slug }: Props) => {
    const router = useRouter();

    return (
        <div className={styles.mainItems}>
            <Link href={'/guides/select-characters'}>
                <img
                    src="/assets/btn-select-character-on.png"
                    alt=""
                    style={{ filter: slug === 'select-characters' ? 'grayscale(0%)' : 'grayscale(100%)' }}
                />
            </Link>
            <Link href={'/guides/attendance-event'}>
                <img
                    src="/assets/btn-attendance-on.png"
                    alt=""
                    style={{ filter: slug === 'attendance-event' ? 'grayscale(0%)' : 'grayscale(100%)' }}
                />
            </Link>
            <Link href={'/guides/prof-phoru-growth-guide'}>
                <img
                    src="/assets/btn-phoru-growth-on.png"
                    alt=""
                    style={{ filter: slug === 'prof-phoru-growth-guide' ? 'grayscale(0%)' : 'grayscale(100%)' }}
                />
            </Link>
            <Link href={'/guides/mentor-pupil-system'}>
                <img
                    src="/assets/btn-mentorpupil-on.png"
                    alt=""
                    style={{ filter: slug === 'mentor-pupil-system' ? 'grayscale(0%)' : 'grayscale(100%)' }}
                />
            </Link>
            <Link href={'/guides/steam'}>
                <img
                    src="/assets/btn-steam-on.png"
                    alt=""
                    style={{ filter: slug === 'steam' ? 'grayscale(0%)' : 'grayscale(100%)' }}
                />
            </Link>

        </div>
    )
}