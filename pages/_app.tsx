import "@/styles/globals.css";
import { RecoilRoot } from "recoil";
import type { AppProps } from "next/app";
import { NextSeo } from "next-seo";
import { imageUrl } from "@/utils/imageUrl";

export default function App({ Component, pageProps }: AppProps) {
  const img = pageProps.pageInfo?.avatar;

  const icon = (size: number) =>
    img ? imageUrl(img).width(size).height(size).url() : undefined;

  const additionalLinkTags = img
    ? [
        { rel: "icon", type: "image/png", sizes: "16x16", href: icon(16)! },
        { rel: "icon", type: "image/png", sizes: "32x32", href: icon(32)! },
        { rel: "icon", type: "image/png", sizes: "96x96", href: icon(96)! },
        { rel: "icon", type: "image/png", sizes: "192x192", href: icon(192)! },
        { rel: "icon", type: "image/png", sizes: "512x512", href: icon(512)! },

        { rel: "apple-touch-icon", sizes: "180x180", href: icon(180)! },
      ]
    : undefined;
  return (
    <>
      <NextSeo
        title={`${pageProps.pageInfo?.name} - portfolio`}
        description={`
         ${pageProps.pageInfo?.name} portfolio, a ${pageProps.pageInfo?.target} developer from ${pageProps.pageInfo?.country}
        `}
        additionalLinkTags={additionalLinkTags}
      />
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </>
  );
}
