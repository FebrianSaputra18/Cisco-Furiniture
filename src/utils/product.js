import React from "react";
import featureImg1 from "../assets/images/featured/img1.png";
import featureImg2 from "../assets/images/featured/img2.png";
import featureImg3 from "../assets/images/featured/img3.png";
import featureImg4 from "../assets/images/featured/img4.png";
import featureImg5 from "../assets/images/featured/img5.png";
import featureImg6 from "../assets/images/featured/img6.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";

const ProductData = () => {
  const products = [
    {
      id: 1,
      image: featureImg1,
      title: "Modern Minimalist Sofa",
      price: 19.99,
      tags: ["Elegan", "Minimalis", "Modern"],
    },
    {
      id: 2,
      image: featureImg2,
      title: "Modern Minimalist Sofa",
      price: 19.99,
      tags: ["Elegan", "Minimalis", "Modern"],
    },
    {
      id: 3,
      image: featureImg3,
      title: "Modern Minimalist Sofa",
      price: 19.99,
      tags: ["Elegan", "Minimalis", "Modern"],
    },
    {
      id: 4,
      image: featureImg4,
      title: "Modern Minimalist Sofa",
      price: 19.99,
      tags: ["Elegan", "Minimalis", "Modern"],
    },
    {
      id: 5,
      image: featureImg5,
      title: "Modern Minimalist Sofa",
      price: 19.99,
      tags: ["Elegan", "Minimalis", "Modern"],
    },
    {
      id: 6,
      image: featureImg6,
      title: "Modern Minimalist Sofa",
      price: 19.99,
      tags: ["Elegan", "Minimalis", "Modern"],
    },
  ];
  console.log('product', products)
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {products.map((product) => (
        <motion.div key={product.id} whileHover={{ scale: 1.1 }} >
          <div className="p-2 cursor-pointer">
            <div
              className="h-64 w-auto overflow-hidden rounded-t-md shadow-sm"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                className="h-full object-cover object-center shadow-sm"
                src={product.image}
                alt={product.title}
              />
            </div>

            <div className="bg-white shadow-lg p-4 font-sans">
              <h2 className="text-amber-950 font-semibold text-md">
                {product.title}
              </h2>
              <ul className="flex gap-2 text-gray-400 text-sm pt-2">
                {product.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
              <p className="text-md pt-1 font-semibold text-amber-950">
                ${product.price}
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </Slider>
  );
};

export default ProductData;
