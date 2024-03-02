import {Navbar} from './components';
import {AboutUs, Footer, Header, Projects, Services, Testimonials, Brands} from './containers';
import './App.css'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <AboutUs />
      <Services />
      <Brands />
      <Projects />
      <Testimonials />
      <Footer /> 
    </div>
  );
}

export default App;
