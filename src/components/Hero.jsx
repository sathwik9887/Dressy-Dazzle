import React from "react";
import asset1 from "../assets/asset1.png";
import { FaStar } from "react-icons/fa6";

const items = [
  {
    id: 1,
    category: "Men's Clothing",
    name: "Highlander Men's Tshirt",
    img: asset1,
    price: "$50",
    rating: "4.0",
  },
  {
    id: 2,
    category: "Men's Clothing",
    name: "Highlander Men's Tshirt",
    img: asset1,
    price: "$50",
    rating: "4.0",
  },
  {
    id: 3,
    category: "Men's Clothing",
    name: "Highlander Men's Tshirt",
    img: asset1,
    price: "$50",
    rating: "4.0",
  },
  {
    id: 4,
    category: "Men's Clothing",
    name: "Highlander Men's Tshirt",
    img: asset1,
    price: "$50",
    rating: "4.0",
  },
];

const Hero = () => {
  return (
    <div className="py-20 lg:px-40 md:px-20 sm:px-5">
      <div className="py-20 lg:px-5 md:px-20 sm:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center space-y-3 p-6  rounded-lg  cursor-pointer bg-gray-200 shadow-lg"
            >
              <img
                src={item.img}
                alt={item.name}
                width={250}
                className="transition-transform duration-300 transform hover:scale-110 hover:-translate-y-2"
              />
              <p className="text-xs text-black font-medium">{item.category}</p>
              <h3 className="text-xl text-black font-bold">{item.name}</h3>
              <div className="flex justify-between items-center space-x-3 w-full">
                <h3 className="text-lg text-black font-bold">{item.price}</h3>
                <div className="bg-green-600 px-2 rounded-md flex justify-between items-center">
                  <FaStar className="mr-1 text-xs text-white" />
                  <h3 className="text-sm text-white font-bold">
                    {item.rating}
                  </h3>
                </div>
              </div>

              <button
                className="bg-green-600 text-white px-4 py-2 rounded"
                onClick={() => {}}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
