import styles from './Header.module.scss';
import { Navbar } from '../Navbar/Navbar';
const mainClass = 'header';

export function Header() {
  return (
    <header className={styles.header}>
      <Navbar />
    </header>
  );
}
