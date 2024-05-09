import type { Metadata } from 'next';
import { Raleway } from 'next/font/google';
import './globals.css';
import { Header, Footer } from '@/components/organisms';
import QueryProviders from '../../providers/queryClientProviders';
import { Toaster } from 'react-hot-toast';
import initTranslations from '../i18n';
import TranslationsProvider from '@/providers/TranslationsProvider';

const inter = Raleway({ subsets: ['cyrillic'], style: ['normal'] });

export const metadata: Metadata = {
  title: 'Quest room App',
  description: 'Quest room',
};

const RootLayout = async ({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) => {
  const { t, resources } = await initTranslations(locale, ['default']);
  return (
    <html lang='en'>
      <body
        className={`${inter.className} 
     
         `}
      >
        <TranslationsProvider
          namespaces={['default']}
          locale={locale}
          resources={resources}
        >
          <Header />
          <main>
            <QueryProviders>
              {children}
              <Toaster position='top-center' />
            </QueryProviders>
          </main>
          <footer>
            <Footer />
          </footer>
        </TranslationsProvider>
      </body>
    </html>
  );
};

export default RootLayout;
