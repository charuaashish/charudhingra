import React from 'react';

import type { Metadata } from 'next';
import { Raleway, Source_Sans_3 } from 'next/font/google';

import GoogleAnalytics from '@/components/Template/GoogleAnalytics';
import Navigation from '@/components/Template/Navigation';
import '@/static/css/main.scss';

const sourceSans = Source_Sans_3({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-source-sans',
  display: 'swap',
});

const raleway = Raleway({
  weight: ['400', '800', '900'],
  subsets: ['latin'],
  variable: '--font-raleway',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: "Charu Dhingra",
    template: "%s | Charu Dhingra",
  },
  description:
    "Charu Dhingra's personal website. Data Governance Specialist, Data Engineer, Data Quality Engineer, Data Analyst",
  keywords: [
    "Charu Dhingra",
    'data scientist',
    'Data Governance Specialist',
    'BI Developer',
    'data engineer',
    'data quality',
  ],
  authors: [{ name: "Charu Dhingra" }],
  creator: "Charu Dhingra",
  metadataBase: new URL('https://charudingra.onrender.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://charudingra.onrender.com',
    siteName: "Charu Dhingra",
    title: "Charu Dhingra",
    description: 'Data Governance Specialist, Data Engineer, Data Quality Engineer, BI Developer',
    images: [
      {
        url: '/images/me.jpg',
        width: 1200,
        height: 630,
        alt: "Charu Dhingra",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sourceSans.variable} ${raleway.variable}`}>
      <body>
        <div id="wrapper">
          <Navigation />
          {children}
        </div>
        <GoogleAnalytics />
      </body>
    </html>
  );
}
