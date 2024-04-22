import '@/styles/globals.css'
import { RecoilRoot } from 'recoil';
import type { AppProps } from 'next/app'
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
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </>
  );
}
