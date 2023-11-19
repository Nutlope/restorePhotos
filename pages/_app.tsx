import { Analytics } from '@vercel/analytics/react';
import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import '../styles/globals.css';
import PlausibleProvider from 'next-plausible';

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <PlausibleProvider domain="restorephotos.io">
        <Component {...pageProps} />
      </PlausibleProvider>
      <Analytics />
    </SessionProvider>
  );
}

export default MyApp;
