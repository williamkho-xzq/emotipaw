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
