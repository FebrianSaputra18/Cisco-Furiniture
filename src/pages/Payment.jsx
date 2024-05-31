import React from "react";
import { Link } from "react-router-dom";
import { imgContent } from "../assets/images";
import { IoIosArrowForward } from "react-icons/io";

const Payment = () => {
  return (
    <section>
      <div className="bg-white">
        <div className="relative">
          <img
            src={imgContent}
            alt="Gambar"
            className="w-full h-[300px] object-cover"
          />
          <div className="absolute inset-0 flex flex-col justify-center bg-opacity-70 bg-gradient-to-r from-amber-950 to-transparent px-24">
            <div className="font-playfair">
              <h1 className=" text-5xl font-semibold text-white">Cart</h1>
              <ol className="list-none gap-4 inline-flex pt-4 items-center">
                <li className="flex items-center">
                  <Link to="/" className="text-gray-400 hover:text-gray-700">
                    Home
                  </Link>
                  <IoIosArrowForward className="text-white ml-4" />
                </li>
                <li className="flex items-center">
                  <Link
                    to="/view-cart"
                    className="text-gray-400 hover:text-gray-700"
                  >
                    Cart
                  </Link>
                  <IoIosArrowForward className="text-white ml-4" />
                </li>
                <li className="flex items-center">
                  <Link
                    to="/view-cart/payment"
                    className="text-white hover:text-gray-700"
                  >
                    Payment
                  </Link>
                  <IoIosArrowForward className="text-white ml-4" />
                </li>
              </ol>
            </div>
          </div>
        </div>
        <div className="px-24 py-16">
          <h1 className="font-semibold text-2xl text-amber-900">Payment</h1>
          <p className="text-gray-400 font-light text-sm py-2 font-sans">
            1 From 2 Step
          </p>
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-amber-900">01</div>
            <div class="bg-amber-900">01</div>
            <div class="bg-amber-900">02</div>
            <div class="bg-amber-900">02</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Payment;
