import '../styles/globals.css'
import '../styles/app1c4a.css'
import  '../styles/bundle1c4a.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react';


function MyApp({ Component, pageProps }: AppProps) {
  
  return (
    
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp

// pages/_app.tsx
