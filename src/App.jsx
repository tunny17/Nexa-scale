import { useRef } from 'react';
import './App.css';
import {
  Body,
  Hero,
  Navbar,
  BodyII,
  Connected,
  Testimonies,
  Subscribe,
  Footer,
} from './components';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import { LeftWhyBackground } from './assets';

function App() {
  const containerRef = useRef(null);
  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
        // ... all available Locomotive Scroll instance options
      }}
      containerRef={containerRef}>
      <main data-scroll-container ref={containerRef}>
        <div
          data-scroll-section
          className='bg-[#59A96A] rounded-b-[85px] relative'>
          <div
            data-scroll-section
            className='py-7 bg-[#FFB930] rounded-b-[85px] z-20'>
            <Navbar />
            <Hero />
          </div>
          <Body />
          <img
            src={LeftWhyBackground}
            alt=''
            className='absolute bottom-0 left-0 z-[-10]'
          />
        </div>
        <BodyII />
        <Connected />
        <div data-scroll-section className='bg-[#FFB930] rounded-b-[85px]'>
          <Testimonies />
        </div>
        <Subscribe />
        <Footer />
      </main>
    </LocomotiveScrollProvider>
  );
}

export default App;
