import { Inter } from 'next/font/google';
import { NextUIProvider } from '@nextui-org/react';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'St. Olaf POS',
  description: 'St. Olaf Program of Study',
};

export default function RootLayout({ children }) {
  return (
    <NextUIProvider>
      <html lang='en'>
        <body className={inter.className}>{children}</body>
      </html>
    </NextUIProvider>
  );
}
