import styles from './styles.module.css';

type Props = {
    name: string;
    alias: string;
    className: string;
    description: string;
    videoUrl: string;
    active: boolean;
}

export const CharacterItem = ({ name, alias, className, description, videoUrl, active }: Props) => {
    return (
        <div className={styles.container}>

        </div>
    )
}