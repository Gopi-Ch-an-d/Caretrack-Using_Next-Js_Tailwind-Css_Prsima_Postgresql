import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import "../styles/globals.css";
import { Providers } from '@/components/providers';
import { generateSEO } from '@/lib/seo';

const inter = Inter({ subsets: ['latin'] });
export const metadata: Metadata = {
  ...generateSEO(),
  icons: {
    icon: [
      { url: '/caretrack.png', sizes: '32x32', type: 'image/png' },
      { url: '/caretrack.png', sizes: '192x192', type: 'image/png' }, // Android
      { url: '/caretrack.png', sizes: '512x512', type: 'image/png' }, // High-res
    ],
    apple: [
      { url: '/caretrack.png', sizes: '180x180' }, // iOS PWA
    ],
    shortcut: '/caretrack.png',
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light" style={{ colorScheme: 'light' }}>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
