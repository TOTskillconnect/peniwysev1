import type { Metadata } from 'next';
import { Bricolage_Grotesque } from 'next/font/google';
import './globals.css';
import { NextLoader } from '@/components/shared/loaders/NextLoader';
import AppProviders from '@/components/shared/providers/AppProviders';
import { SanityLive } from '@/sanity/lib/live';

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: 'Peniwyse',
  description: 'Make every dollar count by understanding your cash flow',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${bricolage.className} antialiased`}>
        <NextLoader />
        <AppProviders>{children}</AppProviders>
        <SanityLive />
      </body>
    </html>
  );
}
