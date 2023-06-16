import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type CurrenciesState = {
  currencies: string[];
  baseCurrency: string;
};

const initialState: CurrenciesState = {
  currencies: [],
  baseCurrency: 'USD',
};

export const converter = createSlice({
  name: 'converter',
  initialState,
  reducers: {
    setCurrencies: (state, action: PayloadAction<string[]>) => {
      state.currencies = action.payload || [];
    },
    setBaseCurrency: (state, action: PayloadAction<string>) => {
      state.baseCurrency = action.payload || '';
    },
  },
});

export const { setCurrencies, setBaseCurrency } = converter.actions;

export default converter.reducer;
