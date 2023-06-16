import Link from 'next/link';
import styles from './Navbar.module.scss';
import { NextRouter, useRouter } from 'next/router';

export const Navbar = () => {
  const router: NextRouter = useRouter();

  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbar__list}>
        <li className={styles.navbar__item}>
          <Link href={'/'} className={router.pathname === '/' ? `${styles.navbar__link} ${styles.navbar__link_active}` : styles.navbar__link}>
            Home
          </Link>
        </li>
        <li>
          <Link href={'/rates'} className={router.pathname === '/rates' ? `${styles.navbar__link} ${styles.navbar__link_active}` : styles.navbar__link}>
            Rates
          </Link>
        </li>
      </ul>
    </nav>
  );
};
