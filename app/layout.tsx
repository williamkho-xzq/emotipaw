import '@/app/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Layout from '@/components/layout';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'EmotiPaw - AI Pet Emotion Recognition',
  description: "Understand your pet's emotions with AI technology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="emotipaw">
      <body className={inter.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
