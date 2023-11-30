import '../styles/globals.css';
import Header from '@/component/Header';
import Footer from '@/component/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
