import { ReactNode } from 'react';
import { Header } from '@/components/Header/Header';
import { Footer } from '@/components/Footer/Footer';
import Head from 'next/head';

import { useGetCurrenciesQuery } from '../redux/services/api';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setCurrencies } from '../redux/features/converter-slice';
import styles from './MainLayout.module.scss';

type ComponentProps = {
  children: ReactNode;
  title: string;
};

export function MainLayout({ children, title }: ComponentProps) {
  const { data } = useGetCurrenciesQuery('USD');
  const dispatch = useDispatch();

  useEffect(() => {
    if (data) {
      const arrCurrency: string[] = Object.keys(data?.conversion_rates);
      dispatch(setCurrencies(arrCurrency));
    }
  }, [data, dispatch]);

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  );
}
