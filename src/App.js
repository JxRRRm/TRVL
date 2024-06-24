import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Destinations from './components/pages/Destinations';
import China from './components/pages/China';
import Japan from './components/pages/Japan';
import Thailand from './components/pages/Thailand';
import Vietnam from './components/pages/Vietnam'
import SouthKorea from './components/pages/SouthKorea'
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <>
      <Router>
        <Navbar />
        <Routes>
            <Route path='/' exact element={<Home />}/>
            <Route path='/destinations' exact element={<Destinations />}/>
            <Route path='/china' exact element={<China />}/>
            <Route path='/japan' exact element={<Japan />}/>
            <Route path='/thailand' exact element={<Thailand />}/>
            <Route path='/vietnam' exact element={<Vietnam />}/>
            <Route path='/south-korea' exact element={<SouthKorea />}/>
        </Routes>
      </Router>
      </>
    </div>
  );
}

export default App;
