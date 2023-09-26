import "./globals.css";

import { initFlowbite } from "flowbite";
import { Flowbite } from "flowbite-react";
import type { Metadata } from "next";
import { AppProps } from "next/app";
import Script from "next/script";
import { useEffect } from "react";

import { theme } from "./theme";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => initFlowbite(), []);

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_MEASUREMENT_ID}`}
        strategy="lazyOnload"
      />
      <Script id="google-analytics" strategy="lazyOnload">
        {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_MEASUREMENT_ID}', {
                    page_path: window.location.pathname,
                    });
                `}
      </Script>
      <Flowbite theme={theme}>
        <Component {...pageProps} />;
      </Flowbite>
    </>
  );
}
