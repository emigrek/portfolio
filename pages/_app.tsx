import '../styles/globals.css'
import { RecoilRoot } from 'recoil';
import type { AppProps } from 'next/app'
import GAScript from '../components/GAScript';
import { NextSeo } from 'next-seo';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextSeo
        title={`${pageProps.pageInfo?.name} - portfolio`}
        description={`
          Visit ${pageProps.pageInfo?.name} portfolio, a ${pageProps.pageInfo?.target} developer from ${pageProps.pageInfo?.country}.
        `}
      />
      <GAScript />
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </>
  );
}
