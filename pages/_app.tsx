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
      </Head>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </div>
  );
}
