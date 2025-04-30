import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Shoes from './pages/Shoes';
import ETF from './pages/ETF';
import About from './pages/About';
import Albert from './pages/Albert';
import AddShoeForm from './pages/admin/AddShoeForm';
import AdminProtected from './components/admin/AdminProtected';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shoes" element={<Shoes />} />
            <Route path="/etf" element={<ETF />} />
            <Route path="/about" element={<About />} />
            <Route path="/albert" element={<Albert />} />
            <Route path="/admin/add-shoe" element={<AdminProtected><AddShoeForm /></AdminProtected>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
