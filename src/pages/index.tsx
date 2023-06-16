import { MainLayout } from '@/layouts/MainLayout';
import Form from '@/components/Form/Form';
import globalStyle from '../styles/globals.module.scss';
import style from './index.module.scss';

export default function Home() {
  return (
    <MainLayout title="Home | Converter">
      <section className={style.container}>
        <h1 className={globalStyle.title}>Currency converter</h1>
        <Form />
      </section>
    </MainLayout>
  );
}
