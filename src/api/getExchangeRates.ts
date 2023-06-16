import axios from 'axios';
import { API_URL } from '@/constants/constants';

export async function getExchangeRates(baseCurrency: string) {
  try {
    const res = await axios.get(`${API_URL}/latest/${baseCurrency}`);
    const { conversion_rates } = res.data;
    return { exchangeRates: conversion_rates };
  } catch (e) {
    if (e instanceof Error) {
      return { props: { error: e.message } };
    }
  }
}
