import React from "react";
import { imgContent } from "../assets/images";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { VscSettings } from "react-icons/vsc";
import ProductPage from "../utils/dataProduct";
import { RxDividerVertical } from "react-icons/rx";

const Product = () => {
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
              <h1 className=" text-5xl font-semibold text-white">Product</h1>
              <ol className="list-none gap-4 inline-flex pt-4 items-center">
                <li className="flex items-center">
                  <Link to="/" className="text-gray-400 hover:text-gray-700">
                    Home
                  </Link>
                  <IoIosArrowForward className="text-white ml-4" />
                </li>
                <li className="flex items-center">
                  <Link to="/product" className="text-white hover:text-gray-700">
                    Product
                  </Link>
                  <IoIosArrowForward className="text-white ml-4" />
                </li>
              </ol>
            </div>
          </div>
        </div>
        <div className="py-9 px-24 flex justify-between  text-amber-950 font-sans shadow-sm shadow-amber-950 ">
          <div className="flex items-center">
            <VscSettings />
            <p className="px-4">Filters</p>
            <RxDividerVertical />
            <p>Showing 1 - 12 of 34 results</p>
          </div>
          <div className="flex gap-4 items-center">
            <h1>Show</h1>
            <p className="disabled:opacity-75">16</p>
            <h1>Short by</h1>
            <p className="disabled:opacity-75">Default</p>
          </div>
        </div>
        <div className="px-24 py-9 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 ">
          <ProductPage />
        </div>
        <ol className="flex  justify-center pb-12 text-white gap-8 font-sans">
          <button>
            <li className="bg-amber-950 w-8 h-7 text-center ">1</li>
          </button>
          <button>
            <li className="bg-amber-900 w-8 h-7 text-center ">2</li>
          </button>
          <button>
            <li className="bg-amber-900 w-8 h-7 text-center ">3</li>
          </button>
          <button>
            <li className="bg-amber-900 w-8 h-7 text-center ">4</li>
          </button>
          <button>
            <li className="bg-amber-950 w-16 h-7 text-center ">Next</li>
          </button>
        </ol>
      </div>
    </section>
  );
};

export default Product;
