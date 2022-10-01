import { useRouter } from "next/router";
import { Banner } from "../../components/Banner";
import styles from '../../styles/InstallationGuide.module.css'
import Header from "../../components/Header";
import { InstallationGuideComponent } from "../../components/InstallationGuideComponent";

const InstallationGuide = () => {
    const { asPath } = useRouter();
    return (
        <div className={styles.container}>
            <Header area="download" />
            <Banner banners={['/assets/mh-installation.jpg']} />
            <div className={styles.guideArea}>
                {asPath.split('?')[1] === 'en' &&
                    <>
                        <InstallationGuideComponent
                            title='STEP 1 GET THE ELSWORD DOWNLOADER'
                            resume='Go to Download Section and click Download Game button to save the file. Click the file to “Run” and start downloading the game client using the Elsword Game Installer.'
                            imageUrl='/assets/img_installation_1.jpg'
                        />
                        <InstallationGuideComponent
                            title='STEP 2 COMPLETE THE DOWNLOAD'
                            resume='Once the downloader completes downloading Elsword, click ‘Open.’ This will automatically start the installation process.'
                            imageUrl='/assets/img_installation_2.jpg'
                        />
                        <InstallationGuideComponent
                            title='STEP 3
                            CONFIRM THE FOLDER DESTINATION'
                            resume='Confirm the folder destination where Elsword should be installed. Click ‘Next’ to continue.'
                            imageUrl='/assets/img_installation_3.png'
                        />
                        <InstallationGuideComponent
                            title='STEP 4
                            INSTALL THE GAME'
                            resume='Click ‘Install’ to begin installation.'
                            imageUrl='/assets/img_installation_4.png'
                        />
                        <InstallationGuideComponent
                            title='STEP 5
                            FINISH INSTALLING THE GAME'
                            resume='Press ‘Finish’ when the game has been fully installed.'
                            imageUrl='/assets/img_installation_5.jpg'
                        />
                        <InstallationGuideComponent
                            title='STEP 6
                            ELSWORD LAUNCHER PATCH'
                            resume='After you click ‘Finish’ you will be redirected to Elsword Launcher to Patch the Game'
                            imageUrl='/assets/img_installation_6B.jpg'
                        />
                        <InstallationGuideComponent
                            title='STEP 7
                            LAUNCH THE GAME'
                            resume='Log in to start the game.'
                            imageUrl='/assets/img_installation_7.jpg'
                        />

                    </>
                }
                {asPath.split('?')[1] === 'pt' &&
                    <>
                        <InstallationGuideComponent
                            title='STEP 1 GET THE ELSWORD DOWNLOADER'
                            resume='Go to Download Section and click Download Game button to save the file. Click the file to “Run” and start downloading the game client using the Elsword Game Installer.'
                            imageUrl='/assets/img_installation_1.jpg'
                        />
                        <InstallationGuideComponent
                            title='STEP 2 COMPLETE THE DOWNLOAD'
                            resume='Once the downloader completes downloading Elsword, click ‘Open.’ This will automatically start the installation process.'
                            imageUrl='/assets/img_installation_2.jpg'
                        />
                        <InstallationGuideComponent
                            title='STEP 3
                            CONFIRM THE FOLDER DESTINATION'
                            resume='Confirm the folder destination where Elsword should be installed. Click ‘Next’ to continue.'
                            imageUrl='/assets/img_installation_3.png'
                        />
                        <InstallationGuideComponent
                            title='STEP 4
                            INSTALL THE GAME'
                            resume='Click ‘Install’ to begin installation.'
                            imageUrl='/assets/img_installation_4.png'
                        />
                        <InstallationGuideComponent
                            title='STEP 5
                            FINISH INSTALLING THE GAME'
                            resume='Press ‘Finish’ when the game has been fully installed.'
                            imageUrl='/assets/img_installation_5.jpg'
                        />
                        <InstallationGuideComponent
                            title='STEP 6
                            ELSWORD LAUNCHER PATCH'
                            resume='After you click ‘Finish’ you will be redirected to Elsword Launcher to Patch the Game'
                            imageUrl='/assets/img_installation_6B.jpg'
                        />
                        <InstallationGuideComponent
                            title='STEP 7
                            LAUNCH THE GAME'
                            resume='Log in to start the game.'
                            imageUrl='/assets/img_installation_7.jpg'
                        />

                    </>
                }
            </div>
        </div>
    )
}

export default InstallationGuide;