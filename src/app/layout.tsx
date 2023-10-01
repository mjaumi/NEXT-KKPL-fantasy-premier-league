import Header from '@/components/Header/Header';
import './globals.css';
import type { Metadata } from 'next';
import Footer from '@/components/Footer/Footer';

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
      <body className='font-poppins bg-KKPL-dark-blue text-white'>
        <Header />
        <main className='py-32 min-h-screen'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
