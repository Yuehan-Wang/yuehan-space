import '../styles/globals.css';
import Header from '@/component/Header';
import Footer from '@/component/Footer';
import Head from 'next/head';


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
      <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
