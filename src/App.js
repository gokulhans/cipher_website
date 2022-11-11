import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import About from './pages/about/About';

function App() {
  return (
    <>
      <Navbar />
      <div className='mt-16 pt-4'>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      <Footer />

    </>
  );
}

export default App;
