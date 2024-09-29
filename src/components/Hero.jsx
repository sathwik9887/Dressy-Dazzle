import React from "react";
import { FaStar } from "react-icons/fa6";
import { useState, useEffect } from "react";
import axios from "axios";

const Hero = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setItems(response.data);
      } catch (error) {
        console.log("Error fetching products", error);
      }
    };
    fetchItems();
  }, []);

  return (
    <div className="py-20 lg:px-40 md:px-20 sm:px-5">
      <div className="py-20 lg:px-5 md:px-20 sm:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center space-y-3 p-6  rounded-lg  cursor-pointer bg-white shadow-xl"
            >
              <img
                src={item.image}
                alt={item.title}
                width={200}
                className="transition-transform duration-300 transform hover:scale-110 hover:-translate-y-2 h-48 w-full object-center"
              />
              <p className="text-xs text-black font-medium">{item.category}</p>
              <h3 className="text-xl text-black font-bold">{item.title}</h3>
              <div className="flex justify-between items-center space-x-3 w-full">
                <h3 className="text-lg text-black font-bold">${item.price}</h3>
                <div className="bg-green-600 px-2 rounded-md flex justify-between items-center">
                  <FaStar className="mr-1 text-xs text-white" />
                  <h3 className="text-sm text-white font-bold">
                    {item.rating.rate}
                  </h3>
                </div>
              </div>
              <p className="text-xs text-gray-600">
                ({item.rating.count} reviews)
              </p>
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
