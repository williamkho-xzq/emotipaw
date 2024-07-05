import '@/app/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Layout from '@/components/layout';
import { getAllPreloadImages } from '@/utils/preloadImages';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'EmotiPaw - AI Pet Emotion Recognition',
  description:
    "Understand your pet's emotions with our AI technology - Try it out now!",
  icons: [
    { rel: 'icon', url: '/favicons/favicon.ico' },
    {
      rel: 'icon',
      url: '/favicons/favicon-16x16.png',
      sizes: '16x16',
      type: 'image/png',
    },
    {
      rel: 'icon',
      url: '/favicons/favicon-32x32.png',
      sizes: '32x32',
      type: 'image/png',
    },
    { rel: 'apple-touch-icon', url: '/favicons/apple-touch-icon.png' },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const preloadImages = getAllPreloadImages();

  return (
    <html lang="en" data-theme="emotipaw">
      <head>
        <link rel="icon" href="/favicons/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicons/favicon-16x16.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicons/apple-touch-icon.png"
        />
        {/* Preload all critical images */}
        {preloadImages.map((src, index) => (
          <link
            key={index}
            rel="preload"
            href={src}
            as="image"
            type={src.endsWith('.jpg') ? 'image/jpeg' : 'image/png'}
          />
        ))}
      </head>
      <body className={inter.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
