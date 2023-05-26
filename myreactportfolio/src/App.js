// import logo from './logo.svg';
import './App.css'
import About from './sections/about/About';
import Navbar from './sections/Navbar/Navbar';
import Header from './sections/Header/Header';
import Services from './sections/Services/Services';
import Portfolio from './sections/Portfolio/Portfolio';
import Testimonials from './sections/Testimonials/Testimonials';
import FAQs from './sections/Faqs/FAQs';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Header/>
    <About/>
   <Services/>
   <Portfolio/>
   <Testimonials/>
   <FAQs/>
   <Contact/>
   <Footer/>
    </div>
  );
}

export default App;
