import axios from 'axios';
import { API_URL } from '@/constants/constants';

type Props = {
  data: {
    currencyInput: number;
    fromCurrencySelect: string;
    toCurrencySelect: string;
  };
  setConvertedAmount: (value: number) => void;
};

export const getConvAmount = async ({ data, setConvertedAmount }: Props) => {
  try {
    const res = await axios.get(`${API_URL}/pair/${data.fromCurrencySelect}/${data.toCurrencySelect}/${data.currencyInput}`);
    const { conversion_result } = res.data;
    setConvertedAmount(conversion_result);
  } catch (e) {
    console.error('Error:', e);
  }
};
