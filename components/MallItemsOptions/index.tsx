import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './styles.module.css';

export const MallItemsOptions = () => {
    const router = useRouter();

    return (
        <div className={styles.mainItems}>
            <Link href={'/guides/item-mall-security'}>
                <img
                    src="/assets/btn-itemmall-on.png"
                    alt=""
                    style={{ filter: router.asPath.split('/')[2] === 'item-mall-security' ? 'grayscale(0%)' : 'grayscale(100%)' }}
                />
            </Link>
            <Link href={'/guides/security-pin-system'}>
                <img
                    src="/assets/btn-security-system-on.png"
                    alt=""
                    style={{ filter: router.asPath.split('/')[2] === 'security-pin-system' ? 'grayscale(0%)' : 'grayscale(100%)' }}
                />
            </Link>
            <Link href={'/guides/account-secure'}>
                <img
                    src="/assets/btn-account-secure-on (1).png"
                    alt=""
                    style={{ filter: router.asPath.split('/')[2] === 'account-secure' ? 'grayscale(0%)' : 'grayscale(100%)' }}
                />
            </Link>
            <Link href={'/guides/restoration-policy'}>
                <img
                    src="/assets/btn-account-secure-on (1).png"
                    alt=""
                    style={{ filter: router.asPath.split('/')[2] === 'restoration-policy' ? 'grayscale(0%)' : 'grayscale(100%)' }}
                />
            </Link>


        </div>
    )
}