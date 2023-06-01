import Image from "next/image";
import styles from '@/components/social/Social.module.css';

export default function Social() {
    return (
        <div>
            <div className={styles.social}>
                <Image src="/email.svg" alt="LinkedIn" width={35} height={35} />
                <Image src="/linkedin.svg" alt="LinkedIn" width={35} height={35} />
                <Image src="/instagram.svg" alt="LinkedIn" width={35} height={35} />
            </div>
        </div>
    );
}
