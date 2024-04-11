import type { Metadata } from 'next';
import { Raleway } from 'next/font/google';
import './globals.css';
import { Header, Footer } from '@/components/organisms';
import QueryProviders from '../providers/queryClientProviders';
import { Toaster } from 'react-hot-toast';

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
      <body
        className={`${inter.className} 
     
         `}
      >
        <Header />
        <main>
          <QueryProviders>
            {children}
            <Toaster position='top-right' />
          </QueryProviders>
        </main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
};

export default RootLayout;
