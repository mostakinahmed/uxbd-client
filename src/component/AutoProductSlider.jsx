import React from "react";

const products = [
  "https://m.media-amazon.com/images/I/71M8ss0CnHL._AC_UF1000,1000_QL80_.jpg",
  "https://m.media-amazon.com/images/I/81WcnNQ-TBL.jpg",
  "https://m.media-amazon.com/images/I/71wEVS6Ru7L.jpg",
  "https://m.media-amazon.com/images/I/81gTwYAhU7L.jpg",
  "https://m.media-amazon.com/images/I/71KilybDOoL.jpg",
  "https://m.media-amazon.com/images/I/71M8ss0CnHL._AC_UF1000,1000_QL80_.jpg",
];

const AutoProductSlider = () => {
  return (
    <div className="w-full px-2 mt-5 md:px-0 md:w-[75%] shadow-lg mx-auto overflow-hidden  bg-white">
      <h1 className=" bg-blue-500 py-2 px-5 text-white font-black mb-5">More Product</h1>
      <div className="relative flex overflow-hidden">
        
        {/* SLIDER TRACK */}
        <div className="flex animate-scroll gap-4 mb-5 min-w-max">

          {/* Duplicate for smooth infinite scroll */}
          {[...products, ...products].map((img, index) => (
            <div
              key={index}
              className="w-24 p-2 cursor-pointer h-32 sm:w-28 sm:h-36 md:w-40 md:h-60 flex-shrink-0 hover:shadow-2xl rounded overflow-hidden border border-slate-200 hover:border hover:border-blue-500 bg-white"
            >
              <img
                src={img}
                alt="product"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* CUSTOM CSS */}
      <style>
        {`
          @keyframes scroll {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-50%);
            }
          }

          .animate-scroll {
            animation: scroll 20s linear infinite;
          }

          .animate-scroll:hover {
            animation-play-state: paused;
          }
        `}
      </style>
    </div>
  );
};

export default AutoProductSlider;