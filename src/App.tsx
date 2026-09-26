import './App.css';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Pricing from './components/Pricing';
import Steps from './components/Steps';
import Faq from './components/Faq';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Nav />
      <main id="top" className="wrap">
        <Hero />
        <Pricing />
        <Steps />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
