import { Link, useNavigate, useParams } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { FaCircle, FaHeart, FaStar, FaTruckFast } from "react-icons/fa6";
import { useState } from "react";
import { motion } from "framer-motion";

const ProductDetail = ({ products }) => {
  const [showCount, setShowCount] = useState(3);
  const navigate = useNavigate();
  const [count, setCount] = useState(2);

  const handleShowMore = () => {
    setShowCount(showCount + 3);
  };
  const handleShowLess = () => {
    setShowCount(showCount - 3);
  };
  let { productId } = useParams();
  const product = products.find(
    (product) => product.id === parseInt(productId)
  );

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  if (!product) {
    return <div>Product not found</div>;
  }
  const detailProduct = (productId) => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    navigate(`/product/${productId}`);
  };

  return (
    <div>
      <div className="px-24 py-6 bg-amber-950 ">
        <ol className="list-none gap-4 inline-flex items-center font-sans text-white">
          <li className="flex items-center">
            <Link to="/" className="text-gray-400 hover:text-gray-700">
              Home
            </Link>
            <IoIosArrowForward className="ml-4" />
          </li>
          <li className="flex items-center">
            <Link to="/about" className="hover:text-gray-700">
              Product
            </Link>
            <IoIosArrowForward className="mx-4" />
          </li>
        </ol>
      </div>
      <div className="flex py-12 px-24 justify-between text-amber-950 bg-white">
        <div className="grid grid-cols-3 gap-4 w-[540px] h-[500px]">
          <img className="col-span-3" src={product.image} alt="sofa" />
          <img src={product.image} alt="sofa" />
          <img src={product.image} alt="sofa" />
          <img src={product.image} alt="sofa" />
        </div>
        <div className="w-[540px] items-center">
          <h1 className="text-4xl">{product.title}</h1>
          <h1 className="text-3xl py-4">${product.price}</h1>
          <div className="flex items-center font-sans pb-4">
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <div className="border-l-2 h-6 border-gray-500 mx-4"></div>
            <p className="text-sm text-amber-500 font-light">
              5 Customer Review
            </p>
          </div>
          <p className="text-gray-400 font-sans">
            This compact sofa fits in small areas and is perfect for family
            parties and continuous TV viewing. It has a neat design and is easy
            to lift when you want to refurbish, clean or move.
          </p>
          <div className="grid grid-cols-3 gap-4 w-[120px] font-sans py-6 ">
            <p className="col-span-3">Size</p>
            <button className="h-8 rounded-sm  hover:bg-amber-950 hover:text-white bg-amber-950 text-white">
              L
            </button>
            <button className="h-8 rounded-sm bg-gray-400 text-amber-950 hover:bg-amber-950 hover:text-white">
              XL
            </button>
            <button className="h-8 rounded-sm bg-gray-400 text-amber-950 hover:bg-amber-950 hover:text-white">
              XS
            </button>
            <div className="flex items-center border border-amber-950 w-20 h-10 justify-center gap-4 mt-4">
              <button onClick={decrement}>-</button>
              <span>{count}</span>
              <button onClick={increment}>+</button>
            </div>
          </div>
          <div className="flex mt-2 gap-4">
            <button className="flex items-center border bg-amber-800 w-40 text-white h-10 justify-center gap-4 hover:bg-amber-950 rounded-md">
              <IoCartOutline />
              <span>Add to Cart</span>
            </button>
            <button className="flex items-center text-amber-800 text-3xl hover:text-amber-950">
              <FaHeart />
            </button>
          </div>
          <div className="flex font-sans border-t-2 border-b-2 border-gray-500 py-6 mt-8 items-center">
            <div className="text-3xl text-amber-600 pr-4">
              <FaTruckFast />
            </div>
            <div className="w-64">
              <p className="font-semibold">Shipping costs start from</p>
              <p>Calculate now</p>
            </div>
          </div>
          <div className="flex font-sans border-gray-500 py-6 mt-8 items-center">
            <div className="text-3xl text-amber-600 pr-4">
              <FaCircle />
            </div>
            <div className="w-64">
              <p className="font-semibold">Shipping costs start from</p>
              <p>Stock available for Online purchase 25 available</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white px-24 py-20 text-center">
        <hr />
        <h1 className="font-semibold text-4xl py-20 text-amber-900">
          Recent Product
        </h1>
        <div className="flex-wrap flex justify-center">
          {products.slice(0, showCount).map((product) => (
            <div key={product.id} onClick={() => detailProduct(product.id)}>
              <motion.div whileHover={{ scale: 1.1 }}>
                <div className="p-2 cursor-pointer">
                  <div
                    className="h-64 w-auto rounded-t-md shadow-sm"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      className="w-[300px] h-[250px] object-cover shadow-sm"
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
            </div>
          ))}
        </div>
        {showCount < products.length ? (
          <div>
            <button
              onClick={handleShowMore}
              className="bg-amber-900 hover:bg-white hover:text-amber-900 border border-amber-900 text-white font-bold py-2 px-4 rounded mt-4"
            >
              Show More
            </button>
            {showCount > 3 && (
              <button
                onClick={handleShowLess}
                className="bg-amber-900 hover:bg-white hover:text-amber-900 border border-amber-900 text-white font-bold py-2 px-4 rounded mt-4"
              >
                Show Less
              </button>
            )}
          </div>
        ) : (
          <button
            onClick={() => setShowCount(3)}
            className="hover:bg-amber-900 bg-white text-amber-900 border border-amber-900 hover:text-white font-bold py-2 px-4 rounded mt-4"
          >
            Show Less
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
