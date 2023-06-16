import { useForm, SubmitHandler } from 'react-hook-form';
import { Select } from '../Select/Select';
import { getConvAmount } from '../../api/getConvAmount';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { useState } from 'react';
import style from './Form.module.scss';
import globalStyle from '../../styles/globals.module.scss';

type FormValues = {
  currencyInput: number;
  fromCurrencySelect: string;
  toCurrencySelect: string;
  amountInput: number;
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
  } = useForm<FormValues>({
    reValidateMode: 'onChange',
  });

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
        <input className={style.form__input} inputMode="numeric" placeholder="enter amount" {...register('currencyInput', { required: true })} onInput={handleResetAmountInput} />

        <Select options={currencies} onChange={handleResetAmountInput} register={register('fromCurrencySelect', { value: baseCurrency })} />
      </div>
      {errors.currencyInput && <span className={style.form__error}>This field amount is required</span>}
      <div className={style.form__item}>
        <input className={style.form__input} inputMode="numeric" value={convertedAmount} {...register('amountInput')} />
        <Select options={currencies} register={register('toCurrencySelect', { value: baseCurrency })} onChange={handleResetAmountInput} />
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
