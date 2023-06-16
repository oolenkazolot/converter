import Link from 'next/link';
import { MainLayout } from '@/layouts/MainLayout';
import styles from './error.module.scss';

export default function ErrorPage() {
  return (
    <MainLayout title="404 | Converter">
      <h1 className={styles.error}>Error 404</h1>
      <p>
        Please <Link href="/">go back</Link> to safety
      </p>
    </MainLayout>
  );
}
