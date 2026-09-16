
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Home from './Home.jsx'
import NavbarTest from './Components/NavbarTest.jsx';
import Products from './Products.jsx';
import Contact from './Contact.jsx';
import Footer from './Components/Footer.jsx';
import Enquiry from './Enquiry.jsx';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.history.scrollRestoration = 'manual';
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname]);

  return null;
}


function App() {

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="navbar-shell">
        <NavbarTest />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/enquiry" element={<Enquiry />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;
