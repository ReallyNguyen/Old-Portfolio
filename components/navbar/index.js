import { useRouter } from "next/router";
import Link from "next/link";
import styles from "@/components/navbar/Navbar.module.css";

export default function Navbar() {
    const router = useRouter();

    return (
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
    );
}
