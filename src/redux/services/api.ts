import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_URL } from '@/constants/constants';

type TCurrency = {
  conversion_rates: {
    [key: string]: number;
  };
};

export const Api = createApi({
  reducerPath: 'Api',
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_URL}`,
  }),

  endpoints: (builder) => ({
    getCurrencies: builder.query<TCurrency, string>({
      query: (name) => `/latest/${name}`,
    }),
  }),
});

export const { useGetCurrenciesQuery } = Api;
