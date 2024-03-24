import React from "react";
import { logo } from "../assets/icons";

const Footer = () => {
  return (
    <div className="flex justify-between bg-amber-950 px-24 py-12">
      <div className="flex-col">
        <div className="logo flex gap-2 pr-6 pb-10">
          <img className="h-6 w-auto" src={logo} alt="" />
          <h1 className="font-playfair text-xl text-white">Furniture</h1>
        </div>
        <h1 className="font-sans font-semibold pb-4 text-white">Office</h1>
        <p className="font-sans font-light text-sm text-white">Jl. Home, Home, Home, 50564</p>
      </div>
        <div className="flex text-white gap-16">
            <div className="flex-col">
                <p className="font-light font-sans text-gray-300">Link</p>
                <p className="text-white pt-5">Home</p>
                <p className="text-white pt-5">About</p>
                <p className="text-white pt-5">Product</p>
                <p className="text-white pt-5">Contact</p>
            </div>
            <div className="flex-col">
                <p className="font-light font-sans text-gray-300">Help</p>
                <p className="text-white pt-5">Payment Options</p>
                <p className="text-white pt-5">Return</p>
                <p className="text-white pt-5">Privacy Policy</p>
            </div>
        </div>
    </div>
  );
};

export default Footer;
