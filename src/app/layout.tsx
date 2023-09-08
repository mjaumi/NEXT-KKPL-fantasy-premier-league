import Header from '@/components/Header/Header';
import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import Footer from '@/components/Footer/Footer';

// defining the font's data here
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
  variable: '--font-poppins',
});

// defining the root metadata here
export const metadata: Metadata = {
  title: 'Home || Khawondar Kha Premier League',
  description:
    'This is a cricket fantasy premier league management application where every updates of khawondar kha premier league will be shown.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // rendering the root layout here
  return (
    <html lang='en'>
      <body
        className={`${poppins.variable} font-poppins bg-KKPL-dark-blue text-white min-h-screen`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
