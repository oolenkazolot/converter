import { useForm, SubmitHandler } from 'react-hook-form';
import { Select } from '../Select/Select';
import { getConvAmount } from '../../api/getConvAmount';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { useState, useMemo } from 'react';
import style from './Form.module.scss';
import globalStyle from '../../styles/globals.module.scss';

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
    reset,
    formState: { errors },
  } = useForm<FormValues>({ reValidateMode: 'onChange' });

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
    <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={style.form__item}>
        <input className={style.form__input} inputMode="numeric" placeholder="enter amount" {...register('currencyInput', { required: true })} onChange={handleResetAmountInput} />

        <Select options={currencies} register={register('fromCurrencySelect')} onChange={handleResetAmountInput} />
      </div>
      {errors.currencyInput && <span className={style.form__error}>This field amount is required</span>}
      <div className={style.form__item}>
        <input className={style.form__input} inputMode="numeric" value={convertedAmount} {...register('amountInput')} />
        <Select options={currenciesFiltered} register={register('toCurrencySelect')} onChange={handleResetAmountInput} />
      </div>
      <div className={style.form__buttons}>
        <button type="submit" className={globalStyle.btn}>
          Submit
        </button>
        <button className={globalStyle.btn} onClick={handleReset}>
          Reset
        </button>
      </div>
    </form>
  );
}
