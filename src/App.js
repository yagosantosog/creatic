import {Brand, Navbar} from './components';
import {AboutUs, Footer, Header, Projects, Services, Testimonials} from './containers';
import './App.css'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <AboutUs />
      <Services />
      <Brand />
      <Projects />
      <Testimonials />
      <Footer /> 
    </div>
  );
}

export default App;
