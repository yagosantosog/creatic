import React, { useEffect } from 'react';
import { AboutUs, Footer, Hero, Projects, Services, Testimonials, Brands, Header } from './containers';
import './App.css';

const STORAGE_KEY = 'document-scroll-position-y';

function App() {
  useEffect(() => {
    window.addEventListener('load', () => {
      window.scrollTo(0, 0)
    })
    const handleScroll = () => {
      window.sessionStorage.setItem(STORAGE_KEY, window.scrollY);
    };

    window.history.scrollRestoration = 'manual';
    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []); 

  useEffect(() => {
    const y = +sessionStorage.getItem(STORAGE_KEY) || 0;
    window.scrollTo({top: y, left: 0, behavior: "instant",});
  }, []);

  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <AboutUs />
        <Services />
        <Brands />
        <Projects />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default App;
