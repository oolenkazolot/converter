import axios from 'axios';

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
    const res = await axios.get(`https://v6.exchangerate-api.com/v6/728b34419a4718275ea54ee3/pair/${data.fromCurrencySelect}/${data.toCurrencySelect}/${data.currencyInput}`);
    const { conversion_result } = res.data;
    setConvertedAmount(conversion_result);
  } catch (e) {
    console.error('Error:', e);
  }
};
