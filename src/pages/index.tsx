import { MainLayout } from '@/layouts/MainLayout';
import Form from '@/components/Form/Form';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

export default function Home() {
  return (
    <MainLayout title="Home | Converter">
      <h1>Home page</h1>
      <Form />
    </MainLayout>
  );
}
