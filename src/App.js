import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
// import Contact from "./pages/Contact";
import CartDropdown from "./components/Cart";

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };
  return (
    <div className="font-playfair">
      <Navbar toggleCart={toggleCart}/>
      <CartDropdown isOpen={isCartOpen} />
      <Home />
      {/* <Contact /> */}
      <Footer />
    </div>
  );
}

export default App;
