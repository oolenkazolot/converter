import { MainLayout } from '@/layouts/MainLayout';

import Head from 'next/head';

export default function Home() {
  return (
    <MainLayout>
      <Head>
        <title>Converter</title>
      </Head>
      <h1>Home page</h1>
    </MainLayout>
  );
}
