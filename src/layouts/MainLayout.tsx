import { ReactNode } from 'react';
import { Header } from '@/components/Header/Header';
import { Footer } from '@/components/Footer/Footer';
import Head from 'next/head';

import { useGetCurrenciesQuery } from '../redux/services/api';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { setCurrencies } from '../redux/features/converter-slice';
import { RootState } from '@/redux/store';

type ComponentProps = {
  children: ReactNode;
  title: string;
};

export function MainLayout({ children, title }: ComponentProps) {
  const baseCurrency = useSelector((state: RootState) => state.converterReducer.baseCurrency);
  const { data } = useGetCurrenciesQuery(baseCurrency);
  const dispatch = useDispatch();

  useEffect(() => {
    if (data) {
      const arrCurrency: string[] = Object.keys(data?.conversion_rates);
      dispatch(setCurrencies(arrCurrency));
    }
  }, [data, baseCurrency]);

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
