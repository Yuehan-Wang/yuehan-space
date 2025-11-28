import Link from 'next/link';
import styles from '@/styles/Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
        <h1 className={styles.title}>
            <Link href="/" passHref><span>Yuehan{'\'s'} Blog</span></Link>
        </h1>
      <nav>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link href="/" passHref><span>Home</span></Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/project" passHref><span>Project</span></Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/post" passHref><span>Post</span></Link>
          </li>

        </ul>
      </nav>
    </header>
  );
}
