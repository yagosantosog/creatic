import {Navbar} from './components';
import {AboutUs, Footer, Header, Projects, Services, Testimonials, Brands} from './containers';
import './App.css'

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>
      <Header />
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
