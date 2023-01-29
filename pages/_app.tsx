import '../styles/globals.css'
import Head from 'next/head';
import { RecoilRoot } from 'recoil';
import type { AppProps } from 'next/app'
import Navbar from './Navbar';
import Sidebar from './Sidebar';

export default function App({ Component, pageProps }: AppProps) {
  return ( 
    <div>
      <Head>
        <title>Emigrek - portfolio</title>
        <meta name="description" content="Emigrek's portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#000000" />
      </Head>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </div>
  );
}
