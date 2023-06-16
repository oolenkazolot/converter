import '../styles/globals.scss';
import NextNProgress from 'nextjs-progressbar';
import { AppProps } from 'next/app';
import { ReduxProvider } from '@/redux/provider';
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ReduxProvider>
      <NextNProgress color="#fff" startPosition={0.3} stopDelayMs={200} height={4} showOnShallow={true} />
      <Component {...pageProps} />
    </ReduxProvider>
  );
}
