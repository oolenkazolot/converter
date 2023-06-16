import { MainLayout } from '@/layouts/MainLayout';
import { Select } from '@/components/Select/Select';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/redux/store';
import { setBaseCurrency } from '@/redux/features/converter-slice';
import { getExchangeRates } from '@/api/getExchangeRates';
import RatesTable from '@/components/RatesTable/RatesTable';
import globalStyle from '../../styles/globals.module.scss';
import style from './rates.module.scss';

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
      <div>
        <h1 className={globalStyle.title}>Rates</h1>
        <Select options={currencies} classNameTwo={style.select} defaultOption={baseCurrency} onChange={changeBaseCurrency} />
        {exchangeRates ? <RatesTable baseCurrency={baseCurrency} exchangeRates={exchangeRates} /> : <span>Loading ...</span>}
      </div>
    </MainLayout>
  );
}
