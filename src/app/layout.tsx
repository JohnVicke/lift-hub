import "~/styles/globals.css";

import localFont from "next/font/local";

import { RootProviders } from "./root-providers";

const monaSans = localFont({
  src: "../styles/mona-sans.woff2",
  display: "swap",
  variable: "--font-sans",
});

export const metadata = {
  title: "Powerlift",
  description: "Hello world",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans ${monaSans.variable}`}>
        <RootProviders>{children}</RootProviders>
      </body>
    </html>
  );
}
