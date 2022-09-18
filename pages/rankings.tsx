import styles from '../styles/Rankings.module.css';
import { Banner } from "../components/Banner";
import { Header } from "../components/Header";

const Rankings = () => {
    return (
        <div className={styles.container}>
            <Header area="rankings" />
            <Banner banners={['/assets/mh-playerrankings.jpg']} />
            <main className={styles.main}>

            </main>
        </div>
    )
}

export default Rankings;