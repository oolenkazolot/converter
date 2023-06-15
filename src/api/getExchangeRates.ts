import axios from 'axios';

export async function getExchangeRates(baseCurrency: string) {
  try {
    const res = await axios.get(`https://v6.exchangerate-api.com/v6/728b34419a4718275ea54ee3/latest/${baseCurrency}`);
    const { conversion_rates } = res.data;
    return { exchangeRates: conversion_rates };
  } catch (e) {
    if (e instanceof Error) {
      return { props: { error: e.message } };
    }
  }
}
