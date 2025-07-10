import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Work from '../components/Work';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
