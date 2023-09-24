import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <script
          async
          defer
          src='https://analytics.umami.is/script.js'
          data-website-id='6ed8644f-03a1-4603-acec-e0f1be87df70'
        ></script>
        <link rel='apple-touch-icon' href='/favicon/apple-touch-icon.png' />
        <link
          rel='icon'
          type='image/png'
          sizes='192x192'
          href='/favicon/android-chrome-192x192.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='512x512'
          href='/favicon/android-chrome-512x512.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon/favicon-16x16.png'
        />
        <link rel='icon' type='image/x-icon' href='/favicon/favicon.ico'></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
