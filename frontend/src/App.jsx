import React from 'react'
import Home from './landing_page/home/Home'
import Signup from './landing_page/signup/SignUp';
import About from './landing_page/about/About';
import Product from './landing_page/products/Products';
import Pricing from './landing_page/pricing/Pricing';
import Support from './landing_page/support/Support';
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import NotFound from './landing_page/NotFound';

const App = () => {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/product" element={<Product/>}/>
            <Route path="/pricing" element={<Pricing/>}/>
            <Route path="/support" element={<Support/>}/>
            <Route path="*" element={<NotFound/>}/>
          </Routes>
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App