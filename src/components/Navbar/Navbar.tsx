import Link from 'next/link';
import styles from './Navbar.module.scss';

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbar__list}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/rates">Rates</Link>
        </li>
      </ul>
    </nav>
  );
};
