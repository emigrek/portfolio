import '../styles/globals.css'
import Head from 'next/head';
import { RecoilRoot } from 'recoil';
import type { AppProps } from 'next/app'
import GAScript from './GAScript';

export default function App({ Component, pageProps }: AppProps) {
  return ( 
    <>
      <GAScript/>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </>
  );
}
