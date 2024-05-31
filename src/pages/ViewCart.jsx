import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { imgContent } from "../assets/images";
import products from "../data/product";

const ViewCart = () => {
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
                    className="text-white hover:text-gray-700"
                  >
                    Cart
                  </Link>
                  <IoIosArrowForward className="text-white ml-4" />
                </li>
              </ol>
            </div>
          </div>
        </div>
        <div className="bg-white px-24 py-12">
          <div className="flex justify-between gap-32">
            <table class="table-auto w-full h-auto border text-amber-900">
              <thead className="border-b h-10">
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Subtotal</th>
                </tr>
              </thead>
              {products.map((item) => (
                <tbody key={item.id} className="text-center my-2">
                  <tr>
                    <td className="flex items-center justify-center gap-2">
                      <img className="w-40" src={item.image} alt="product" />
                      {item.title}
                    </td>
                    <td>{item.price}</td>
                    <td>
                      <div className="flex gap-3 border border-amber-900 w-16 justify-center text-center font-sans my-2">
                        <button>-</button>
                        <span>1</span>
                        <button>+</button>
                      </div>
                    </td>
                    <td>12000000</td>
                  </tr>
                </tbody>
              ))}
            </table>
            <div className="flex text-amber-900 flex-col w-[400px] h-[200px] text-center px-5 py-2 border border-amber-900">
              <h1 className="text-2xl font-semibold py-4">Cart Totals</h1>
              <div className="flex justify-between pb-2 font-sans">
                <p>Subtotal</p>
                <p className="text-gray-400">Rp. 1.223.000</p>
              </div>
              <div className="flex justify-between font-sans">
                <p>Total</p>
                <p>Rp. 1.350.000,00</p>
              </div>
              <div className="bg-amber-900 text-white my-6 hover:bg-white hover:text-amber-900 border border-amber-900 font-semibold">
                <Link to='/view-cart/payment'>
                  <button>Continue to Payment</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ViewCart;
