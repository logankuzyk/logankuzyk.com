import "./globals.css";
import type { Metadata } from "next";
import { AppProps } from "next/app";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
