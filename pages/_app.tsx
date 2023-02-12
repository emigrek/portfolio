import '../styles/globals.css'
import Head from 'next/head';
import { RecoilRoot } from 'recoil';
import type { AppProps } from 'next/app'
import GAScript from './GAScript';

export default function App({ Component, pageProps }: AppProps) {
  return ( 
    <>
      <GAScript/>
      <Head>
        <title>Karol Janasz - portfolio</title>
        <meta name="description" content="Emigrek's portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/me.png" />
      </Head>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </>
  );
}
