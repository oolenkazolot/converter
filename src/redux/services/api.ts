import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

type TCurrency = {
  conversion_rates: {
    [key: string]: number;
  };
};

export const Api = createApi({
  reducerPath: 'Api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://v6.exchangerate-api.com/v6/728b34419a4718275ea54ee3',
  }),

  endpoints: (builder) => ({
    getCurrencies: builder.query<TCurrency, string>({
      query: (name) => `/latest/${name}`,
    }),
  }),
});

export const { useGetCurrenciesQuery } = Api;
