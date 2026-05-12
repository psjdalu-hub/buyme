import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Custom fonts or meta tags that apply only to Pages Router */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}