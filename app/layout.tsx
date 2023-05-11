import React from 'react';

import { Analytics } from '@vercel/analytics/react';
import { Inter } from 'next/font/google';
import type {Metadata} from "next";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  themeColor: '#333333',
  title: {
    default: 'Cyberbyte Software',
    template: '%s | Cyberbyte Software',
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://cyberbyte.software/',
    siteName: 'Cyberbyte Software',
  },
  twitter: {
    site: '@CyberbyteSoft',
  }
};


export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
    <body className={inter.className}>
    <div className="flex min-h-screen flex-col overflow-hidden">
    {children}
      <Footer />
    </div>
    <Analytics />
    </body>
    </html>
  );
}
