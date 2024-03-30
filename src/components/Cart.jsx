// CartDropdown.js
import React from "react";
import { imgContent } from "../assets/images";
import { AiFillCloseCircle } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";

const Cart = ({ isOpen }) => {
  return (
    <div
      className={`absolute right-56 mt-2 w-80 bg-white border border-gray-300 rounded-md shadow-lg z-10 ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <div className="gap-2 text-amber-900">
        <h1 className="my-4 mx-4 font-semibold text-xl">Cart</h1>
        <div className="flex justify-around">
          <img
            src={imgContent}
            alt="Gambar"
            className="w-32 h-24 object-center object-cover"
          />
          <div className="flex-col">
            <p>Sofa</p>
            <div className="flex gap-3 border border-amber-900 w-16  justify-center text-center font-sans my-2">
              <button>-</button>
              <span>1</span>
              <button>+</button>
            </div>
            <p className="font-sans">Rp. 120000000</p>
          </div>
          <div className="">
            <button className="font-semiboldfo text-lg ">
              <AiFillCloseCircle />
            </button>
          </div>
        </div>
        <div className="my-4 h-[0.5px] bg-gray-500"></div>
        <div className=" mx-4 mb-4">
          <div className="flex justify-between font-sans">
            <p className="text-gray-500 font-playfair">Subtotal</p>
            <p>Rp. 12.2222.222</p>
          </div>
          <div className="flex border border-amber-900 mt-4 w-28 justify-center items-center gap-2 hover:bg-amber-900 hover:text-white rounded-sm">
          <AiOutlineShoppingCart />
          <Link to="/view-cart">
          <button>View Cart</button>
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
