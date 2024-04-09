// import {Navbar} from './components';
import {AboutUs, Footer, Hero, Projects, Services, Testimonials, Brands, Header} from './containers';
import './App.css'
import { ScrollRestoration } from 'react-router-dom';

function App() {
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
      <ScrollRestoration />
    </div>
  );
}

export default App;
