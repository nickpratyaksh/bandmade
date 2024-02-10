"use client";

import "./globals.css";
import { ContextProvider } from "./Context";
import { poppins } from "./ui/fonts";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className}`}>
        <ContextProvider>{children}</ContextProvider>
      </body>
    </html>
  );
}
