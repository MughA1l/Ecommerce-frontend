import React from 'react';
import './App.css';
import Navbar from './components/navbar/navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './pages/shop';
import ShopCategory from './pages/ShopCategory';
import Product from './pages/Product';
import Cart from './pages/Cart';
import LoginSignup from './pages/LoginSignup';
import Footer from './components/Footer/Footer';
import men_banner from './components/assets/banner_mens.png';
import women_banner from './components/assets/banner_women.png';
import kid_banner from './components/assets/banner_kids.png';
import ShopContextProvider from './contexts/ShopContexts/Shopcontext';


function App() {
  return (
    <div>
      {/* Wrap the root component with ShopContextProvider */}
         <ShopContextProvider> 
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/mens" element={<ShopCategory banner={men_banner} category="mens" />} />
            <Route path="/womens" element={<ShopCategory banner={women_banner} category="womens" />} />
            <Route path="/kids" element={<ShopCategory banner={kid_banner} category="kids" />} />
            <Route path="/product/:productId" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<LoginSignup />} />
          </Routes>
          <Footer />
        </BrowserRouter>
        </ShopContextProvider>
        
      
    </div>
  );
}

export default App;