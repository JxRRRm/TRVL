import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Destinations from './pages/Destinations';
import China from './pages/China';
import Japan from './pages/Japan';
import Thailand from './pages/Thailand';
import Vietnam from './pages/Vietnam'
import SouthKorea from './pages/SouthKorea'
import Footer from './components/Footer';
import ScrollToTop from './hooks/ScrollToTop';

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Navbar />
        <div className="main-content">
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/destinations' element={<Destinations />} />
            <Route path='/china' element={<China />} />
            <Route path='/japan' element={<Japan />} />
            <Route path='/thailand' element={<Thailand />} />
            <Route path='/vietnam' element={<Vietnam />} />
            <Route path='/south-korea' element={<SouthKorea />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
