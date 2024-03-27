import React, { useState } from "react";
import { featureImg4, featureImg5, imgContent, maps } from "../assets/images";
import ProductData from "../utils/product";
import { HiChevronRight } from "react-icons/hi";
import { motion } from "framer-motion";
import FeedbackCustomers from "../utils/feedback";
import { IoIosArrowDown } from "react-icons/io";
import { FiMinus } from "react-icons/fi";
import faqs from "../utils/faq";
import { Link } from "react-router-dom";

const Home = () => {
  const [openAccordionId, setOpenAccordionId] = useState(null);

  const toggleAccordion = (id) => {
    setOpenAccordionId(id === openAccordionId ? null : id);
  };
  return (
    <main>
      <section>
        <div className="relative">
          <img src={imgContent} alt="Gambar" className="w-full h-auto" />
          <div className="absolute inset-0 flex flex-col justify-center bg-opacity-70 bg-gradient-to-r from-white to-transparent px-24">
            <div className="font-playfair text-5xl font-semibold text-amber-600">
              <span className="text-amber-800">Discover ade the </span> Perfect{" "}
              <br />
              Furniture{" "}
              <span className="text-amber-800">
                for Your
                <br /> Home
              </span>
            </div>
            <p className="py-5 text-amber-600">
              Transform your living space with our stylish and <br /> modern
              furniture collections.
            </p>
            <button className="bg-amber-900 w-32 h-11 text-white hover:text-amber-900 hover:bg-transparent border border-amber-900 rounded-lg">
              Shop Now
            </button>
          </div>
        </div>
      </section>
      <section>
        <div className="py-24">
          <div className="px-24">
            <p className="text-gray-400 text-sm">Discover</p>
            <h1 className="text-amber-800 text-semibold text-4xl py-3">
              Featured
            </h1>
            <div className="flex justify-between items-center">
              <p className="text-gray-400 text-sm">
                Explore our selection of modern furniture for your home.
              </p>
              <button className="bg-amber-900 w-32 h-11 text-white hover:text-amber-900 hover:bg-transparent border border-amber-900 rounded-lg">
                view all
              </button>
            </div>
          </div>
          <div className="px-[85px] pt-5">
            <ProductData />
          </div>
        </div>
      </section>
      <section>
        <div className="relative">
          <img
            src={featureImg4}
            alt="Gambar"
            className="w-screen h-[600px] object-cover object-center"
          />
          <div className="absolute w-[700px] inset-0 flex flex-col justify-center bg-opacity-70 bg-amber-950 pl-24 pr-16">
            <p className="text-gray-300 font-sans font-extralight">Discover</p>
            <p className="text-white font-playfair text-5xl py-4">
              Experience Modern Furniture Like Never Before
            </p>
            <p className="py-5 font-sans font-light text-gray-300">
              At our online store, we offer a wide range of modern furniture
              that combines quality craftsmanship, innovative design, and
              sustainable materials. Whether you're looking for a statement
              piece or a complete home makeover, our collection has something
              for every style and budget.
            </p>
            <div className="flex gap-4">
              <div className="text-sm">
                <h1 className="font-semibold text-xl text-white font-playfair">
                  Quality
                </h1>
                <p className="pt-4 text-gray-300 font-sans">
                  Experience the finest craftsmanship and attention to detail in
                  every piece.
                </p>
              </div>
              <div className="text-sm">
                <h1 className="font-semibold text-xl text-white font-playfair">
                  Design
                </h1>
                <p className="pt-4 text-gray-300 font-sans">
                  Discover modern furniture designs that are both functional and
                  aesthetically pleasing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="bg-white w-full bg-content">
          <div className="flex justify-between p-24">
            <motion.div whileHover={{ scale: 1.1 }} className="w-auto">
              <img
                className="h-96 w-[590px] object-cover rounded-md"
                src={featureImg5}
                alt="content5"
              />
            </motion.div>
            <div className="w-[590px] p-6 text-amber-900 bg-white">
              <p className="font-light text-gray-400 font-sans">Quality</p>
              <h1 className="text-4xl font-semibold py-5">
                Experience the Best in Modern Furniture
              </h1>
              <p className="text-gray-400">
                Discover our impressive growth, exceptional customer
                satisfaction, and wide range of high-quality products.
              </p>
              <div className="flex gap-4">
                <div className="text-sm">
                  <h1 className="font-semibold text-4xl font-playfair">50%</h1>
                  <p className="pt-4 text-gray-400 font-sans">
                    Experience the finest craftsmanship and attention to detail
                    in every piece.
                  </p>
                </div>
                <div className="text-sm">
                  <h1 className="font-semibold text-4xl font-playfair">50%</h1>
                  <p className="pt-4 text-gray-400 font-sans">
                    Discover modern furniture designs that are both functional
                    and aesthetically pleasing.
                  </p>
                </div>
              </div>
              <div className="flex pt-4 gap-6">
                <button className="w-[100px] h-10 text-sm font-semibold border border-amber-900 hover:bg-amber-900 hover:text-white">
                  Learn More
                </button>
                <button className="flex items-center font-semibold text-sm">
                  Skip Up <HiChevronRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="relative">
          <img
            src={featureImg5}
            alt="Gambar"
            className="w-screen h-[400px] object-center object-cover"
          />
          <div className="absolute w-[700px] inset-0 flex flex-col justify-center bg-opacity-70 bg-amber-950 pl-24 pr-16">
            <p className="text-white font-playfair text-5xl py-4">
              Discover Our Latest Furniture Collections
            </p>
            <p className="py-5 font-sans font-light text-gray-300">
              Explore our new arrivals and seasonal collections to find the
              perfect furniture for your home.
            </p>
            <div className="flex pt-4 gap-6">
              <button className="w-[100px] h-10 text-sm font-semibold bg-amber-900 text-white hover:text-amber-900 hover:bg-white">
                Shop Now
              </button>
              <button className="flex items-center font-semibold text-sm border border-amber-900 w-[100px] justify-center text-white">
                Browse <HiChevronRight />
              </button>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="p-24 bg-white">
          <h1 className="text-4xl text-amber-900 pb-4">Happy Customers</h1>
          <p className="text-gray-400 font-sans pb-10">
            Hear what our customers have to say about us
          </p>
          <FeedbackCustomers />
        </div>
      </section>
      <section>
        <div className="p-24 text-amber-950 text-center bg-white">
          <h1 className="text-4xl ">Frequently Asked Questions</h1>
          <p className="text-sm text-gray-400 font-sans pt-4">
            Find answers to common questions about furniture care, delivery, and
            returns policies.
          </p>
          <div className="max-w-2xl mx-auto pt-8">
            {faqs.map((faq) => (
              <div key={faq.id} className="p-5 text-start font-sans">
                <div className="h-[1px] bg-gray-400"></div>
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full py-3 text-left"
                >
                  <span className="font-semibold text-lg">{faq.question}</span>
                  <span className="float-right">
                    {openAccordionId === faq.id ? (
                      <FiMinus />
                    ) : (
                      <IoIosArrowDown />
                    )}
                  </span>
                </button>
                {openAccordionId === faq.id && (
                  <div className="text-gray-400">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          <h1 className="text-4xl pt-10 font-semibold">
            Still have questions?
          </h1>
          <p className="text-sm text-gray-400 font-sans p-4">
            Contact our support team for assistance.
          </p>
          <Link to={"/contact"}>
            <button className="bg-amber-950 border text-white font-semibold h-12 w-24 hover:bg-transparent hover:border-amber-950 hover:text-amber-950">
              Contact
            </button>
          </Link>
        </div>
      </section>
      <section>
        <div className="flex-col p-24 bg-white">
          <div className="flex justify-between">
            <div className="flex-col">
              <p className="text-gray-400 font-sans">Solutions</p>
              <h1 className="text-amber-950 text-4xl py-4">Get in Touch</h1>
              <p className="text-amber-950 font-sans">
                Have a question or need assistance? Feel free to reach out to us
              </p>
            </div>
            <div className="flex-col font-sans text-amber-950">
              <h1 className="font-semibold">Email</h1>
              <p className="py-2">hongwilaheng12@gmail.com</p>
              <h1 className="font-semibold">Phone</h1>
              <p className="py-2">+62-877-8xxx-xxxx</p>
              <h1 className="font-semibold">Office</h1>
              <p className="py-2">Jl. Home, Home, Home, 57603</p>
            </div>
          </div>
          <div className="pt-4">
            <img src={maps} alt="" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
