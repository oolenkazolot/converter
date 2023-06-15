import { MainLayout } from '@/layouts/MainLayout';
import { Select } from '@/components/Select/Select';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/redux/store';
import { setBaseCurrency } from '@/redux/features/converter-slice';
import { getExchangeRates } from '@/api/getExchangeRates';

import { useEffect, useState } from 'react';

export async function getServerSideProps() {
  const exchangeRates = getExchangeRates('USD');
  return { props: exchangeRates };
}

export default function Rates({ exchangeRates: serverExchangeRates, error }: any) {
  const baseCurrency = useSelector((state: RootState) => state.converterReducer.baseCurrency);
  const [exchangeRates, setExchangeRates] = useState(serverExchangeRates);

  useEffect(() => {
    async function load() {
      const res = await getExchangeRates(baseCurrency);
      setExchangeRates(res?.exchangeRates);
    }

    load();
  }, [baseCurrency]);

  if (!exchangeRates) {
    return;
  }

  if (error) {
    return error;
  }

  const currencies: string[] = useSelector((state: RootState) => state.converterReducer.currencies);

  const dispatch = useDispatch();

  const changeBaseCurrency = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setBaseCurrency(event.target.value));
  };

  return (
    <MainLayout title="Rates | Converter">
      <h1>Rates</h1>
      <Select options={currencies} defaultOption={baseCurrency} onChange={changeBaseCurrency} />
      {exchangeRates ? <pre>{JSON.stringify(exchangeRates)}</pre> : <span>Loading ...</span>}
    </MainLayout>
  );
}
