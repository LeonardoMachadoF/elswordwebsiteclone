import { Banner } from "../../components/Banner";
import { DownloadClientComponent } from "../../components/DownloadClientComponent";
import Header from "../../components/Header";
import styles from '../../styles/Download.module.css'

const Download = () => {
    return (
        <div>
            <Header area="download" />
            <Banner banners={['/assets/mh-download.jpg']} />
            <div className={styles.contentArea}>
                <div className={styles.downloadBanners}>
                    <DownloadClientComponent title='ENGLISH CLIENT' buttonImg='/assets/img_btn_download_en.png' bgImg='/assets/img_download_1.png' />
                    <DownloadClientComponent title='CLIENT BRASILEIRO' buttonImg='/assets/img_btn_download_br.png' bgImg='/assets/img_download_2.png' />
                </div>
                <div className={styles.requeriments}>
                    <div className={styles.requerimentsTitle}>
                        ELSWORD SYSTEM REQUIREMENTS
                    </div>
                    <div className={styles.requerimentsCategoriesAndRecommendations}>
                        <div className={styles.category}>
                            <div className={styles.categoryItemTitle}>
                                Category
                            </div>
                            <div className={styles.categoryItem}>
                                <p>Operating System</p>
                                <p>CPU</p>
                                <p>Memory</p>
                                <p>Graphic Card</p>
                                <p>DirectX Version</p>
                                <p>Hard Disk</p>
                            </div>
                        </div>
                        <div className={styles.recommended}>
                            <div className={styles.recommendedItemTitle}>
                                Recommended Requirements
                            </div>
                            <div className={styles.recommendedItem}>
                                <p>Windows 10 64-bit or higher</p>
                                <p>Intel Core i5 or higher</p>
                                <p>4GB or higher</p>
                                <p>NVIDIA GEFORCE GTX 1050 or higher</p>
                                <p>DirectX 9.0C or higher</p>
                                <p>20 GB or more free space</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.advice}>
                        If you have graphics issues while playing Elsword, make sure your video drivers are up-to-date.
                    </div>
                    <div className={styles.softwareRequeriments}>
                        <div className={styles.directX}>
                            <p>Direct X</p>
                            <img src="/assets/btn_directx.png" alt="" />
                        </div>
                        <div className={styles.graphicCards}>
                            <p>Graphics Card Drivers</p>
                            <div className={styles.graphicCardsImgs}>
                                <img src="/assets/btn_radeon.png" alt="" />
                                <img src="/assets/btn_nvidia.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Download;