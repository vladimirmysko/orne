import type { ReactNode } from "react";

import "@radix-ui/themes/styles.css";
import "./globals.css";

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return children;
}
