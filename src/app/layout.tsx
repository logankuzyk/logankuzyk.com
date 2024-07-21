import "./globals.css";

import { Flowbite } from "flowbite-react";
import type { Metadata } from "next";
import Script from "next/script";
import { ReactNode } from "react";

import { theme } from "../theme";

export const metadata: Metadata = {
  title: "Logan Kuzyk",
  description: "Logan's personal website.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html>
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
      <body>
        <Flowbite theme={theme}>{children}</Flowbite>
      </body>
    </html>
  );
}
