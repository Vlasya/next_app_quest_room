import type { Metadata } from 'next';
import { Raleway, Raleway_Dots } from 'next/font/google';
import './globals.css';
import { Header, Footer } from '@/components/organisms';

const inter = Raleway({ subsets: ['cyrillic'], style: ['normal'] });

export const metadata: Metadata = {
  title: 'Quest room App',
  description: 'Quest room',
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <header>
          <Header />
        </header>
        <main>{children}</main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
};

export default RootLayout;
