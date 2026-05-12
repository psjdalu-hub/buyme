import type { AppProps } from 'next/app';
// Import your global CSS here
// import '../styles/globals.css'; 

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="pages-router-wrapper">
      <Component {...pageProps} />
    </div>
  );
}