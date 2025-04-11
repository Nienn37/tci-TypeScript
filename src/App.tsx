import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Cart from './pages/Cart';
import Message from './pages/Message';
import Header from './components/Header.tsx';
import Footer from './components/Footer.tsx';

import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState<number>(0); // Explicitly type the count state as a number

  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/message" element={<Message />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;