import { useRouter } from "next/router";
import Link from "next/link";
import styles from "@/components/navbar/Navbar.module.css";
import Image from "next/image";

export default function Navbar() {
    const router = useRouter();

    return (
        <>
            <div className={styles.container}>
                <h1 className={styles.logo}>Jordan</h1>
                <nav className={styles.navbar}>
                    <Link href="/" style={{ textDecoration: 'none' }}>
                        <h2 className={`${styles.navbar_item} ${router.pathname === '/' ? styles.active : ''}`}>Home</h2>
                    </Link>

                    <Link href="/about" style={{ textDecoration: 'none' }}>
                        <h2 className={`${styles.navbar_item} ${router.pathname === '/about' ? styles.active : ''}`}>About</h2>
                    </Link>

                    <Link href="/projects" style={{ textDecoration: 'none' }}>
                        <h2 className={`${styles.navbar_item} ${router.pathname === '/projects' ? styles.active : ''}`}>Projects</h2>
                    </Link>

                    <Link href="/contact" style={{ textDecoration: 'none' }}>
                        <h2 className={`${styles.navbar_item} ${router.pathname === '/contact' ? styles.active : ''}`}>Contact</h2>
                    </Link>
                </nav>
                <div className={styles.social}>
                    <Image src="/email.svg" alt="LinkedIn" width={35} height={35} />
                    <Image src="/linkedin.svg" alt="LinkedIn" width={35} height={35} />
                    <Image src="/instagram.svg" alt="LinkedIn" width={35} height={35} />
                </div>
            </div>

        </>
    );
}
