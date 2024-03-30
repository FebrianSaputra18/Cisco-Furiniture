import React, { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { FiMinus } from "react-icons/fi";
import faqs from "../utils/faq";
import { Link } from "react-router-dom";

const Faq = () => {
    const [openAccordionId, setOpenAccordionId] = useState(null);

  const toggleAccordion = (id) => {
    setOpenAccordionId(id === openAccordionId ? null : id);
  };
  return (
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
  )
}

export default Faq