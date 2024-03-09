import {Navbar} from './components';
import {AboutUs, Footer, Header, Projects, Services, Testimonials, Brands} from './containers';
import './App.css'

function App() {
  return (
    <main className="App">
      <Navbar />
      <Header />
      <AboutUs />
      <Services />
      <Brands />
      <Projects />
      <Testimonials />
      <Footer /> 
    </main>
  );
}

export default App;
