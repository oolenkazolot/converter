import { useForm, SubmitHandler } from 'react-hook-form';
import { Select } from '../Select/Select';
import { getConvAmount } from '../../api/getConvAmount';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { useState, useMemo } from 'react';

type FormValues = {
  currencyInput: number;
  fromCurrencySelect: string;
  toCurrencySelect: string;
  amountInput: number;
};

const filterCurrencies = (currencies: string[], baseCurrency: string) => {
  return currencies.filter((currency) => currency !== baseCurrency);
};

export default function Form() {
  const baseCurrency = useSelector((state: RootState) => state.converterReducer.baseCurrency);
  const [convertedAmount, setConvertedAmount] = useState<number>(0);

  const currencies: string[] = useSelector((state: RootState) => state.converterReducer.currencies);

  const {
    register,
    handleSubmit,
    trigger,
    reset,
    formState: { errors },
  } = useForm<FormValues>();

  let currenciesFiltered: string[] = useMemo(() => filterCurrencies(currencies, baseCurrency), [currencies, baseCurrency]);

  const onSubmit: SubmitHandler<FormValues> = (data: FormValues) => {
    getConvAmount({ data, setConvertedAmount });
  };

  const handleResetAmountInput = () => {
    setConvertedAmount(0);
  };

  const handleReset = () => {
    reset();
    handleResetAmountInput();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <>
        <input inputMode="numeric" placeholder="enter amount" {...register('currencyInput', { required: true })} onChange={handleResetAmountInput} />
        {errors.currencyInput && <span>This field amount is required</span>}
        <Select options={currencies} register={register('fromCurrencySelect')} onChange={handleResetAmountInput} />
      </>
      <>
        <input inputMode="numeric" value={convertedAmount} {...register('amountInput')} />
        <Select options={currenciesFiltered} register={register('toCurrencySelect')} onChange={handleResetAmountInput} />
      </>
      <input type="submit" />
      <button onClick={handleReset}>Reset</button>
    </form>
  );
}
