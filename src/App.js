import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home'
import About from './Pages/About';
import Contact from './Pages/Contact';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About category="about"/>} />
            <Route path="/contact" element={<Contact category="contact"/>} />
          </Routes>
        <Footer />     
      </BrowserRouter>
    </div>
  );
}

export default App;
