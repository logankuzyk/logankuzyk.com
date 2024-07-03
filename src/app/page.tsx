"use client";

import { Navigation } from "@src/components/Navigation";
import { NavigationProvider } from "@src/contexts/NavigationContext";
import { Content } from "@src/sections/Content";
import { Header } from "@src/sections/Header";

export default function Home() {
  return (
    <NavigationProvider>
      <Navigation />
      <Header />
      <Content />
    </NavigationProvider>
  );
}
