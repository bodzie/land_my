import '../styles/globals.css';
import PixelInitializer from '../components/PixelInitializer'; 

function MyApp({ Component, pageProps }) {
  return (
    <>
      <PixelInitializer /> 
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;