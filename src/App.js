import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import ProductDetail from "./pages/ProductDetail";
import products from "./data/product";
import Cart from "./components/Cart";
import ViewCart from "./pages/ViewCart";
import Payment from "./pages/Payment";

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };
  return (
    <div className="font-playfair">
      <Navbar toggleCart={toggleCart}/>
      <Cart isOpen={isCartOpen}/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/:productId" element={<ProductDetail products={products} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/view-cart" element={<ViewCart />} />
        <Route path="/view-cart/payment" element={<Payment />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
