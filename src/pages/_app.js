import '@/styles/globals.css';
import Navbar from 'components/Navbar';
import { AnimatePresence } from 'framer-motion';

export default function App({ Component, pageProps }) {
  return (
    <div className='py-24 px-12 lg:px-48'>
      <Navbar></Navbar>
      <AnimatePresence initial={false} mode={'wait'}>
        <Component {...pageProps} />
      </AnimatePresence>
    </div>
  );
}
