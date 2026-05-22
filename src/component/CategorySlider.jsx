import React, { useRef, useState, useEffect } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";

const categories = [
  { id: 1, name: "বই", image: "https://cdn-icons-png.flaticon.com/512/3389/3389081.png" },
  { id: 2, name: "Electronics", image: "https://img.freepik.com/free-photo/view-electronic-gadgets-with-headphones-smartphone_23-2151044431.jpg" },
  { id: 3, name: "Ebook", image: "https://img.freepik.com/free-photo/digital-tablet-screen-with-cloud-icon_53876-104193.jpg" },
  { id: 4, name: "Beauty & Health", image: "https://img.freepik.com/free-photo/beauty-cosmetic-products-white-background_23-2148281165.jpg" },
  { id: 5, name: "Stationery", image: "https://img.freepik.com/free-photo/set-stationery-items-white-background_23-2148873913.jpg" },
  { id: 6, name: "Science Kit", image: "https://img.freepik.com/free-photo/creative-composition-with-educational-toys_23-2148873926.jpg" },
  { id: 7, name: "Groceries", image: "https://img.freepik.com/free-photo/shopping-cart-full-food-products_23-2148288233.jpg" },
  { id: 8, name: "Gift Voucher", image: "https://img.freepik.com/free-vector/gift-card-template-with-golden-bow_23-2147926131.jpg" },
  { id: 9, name: "Academic", image: "https://img.freepik.com/free-photo/stack-books-with-graduation-cap_23-2148873932.jpg" },

  { id: 10, name: "Kids Zone", image: "https://img.freepik.com/free-photo/toys-collection-isolated_23-2148873954.jpg" },
  { id: 5, name: "Stationery", image: "https://img.freepik.com/free-photo/set-stationery-items-white-background_23-2148873913.jpg" },
  { id: 6, name: "Science Kit", image: "https://img.freepik.com/free-photo/creative-composition-with-educational-toys_23-2148873926.jpg" },
  { id: 7, name: "Groceries", image: "https://img.freepik.com/free-photo/shopping-cart-full-food-products_23-2148288233.jpg" },
  { id: 8, name: "Gift Voucher", image: "https://img.freepik.com/free-vector/gift-card-template-with-golden-bow_23-2147926131.jpg" },

];

const CategorySlider = () => {
  const scrollRef = useRef(null);
  const [showLeftBtn, setShowLeftBtn] = useState(false);

  const handleScrollPosition = () => {
    if (scrollRef.current) {
      setShowLeftBtn(scrollRef.current.scrollLeft > 10);
    }
  };

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      const amount =
        direction === "left" ? -clientWidth * 0.8 : clientWidth * 0.8;

      scrollRef.current.scrollBy({
        left: amount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="md:max-w-[75%] w-[95%] mx-auto py-6">
      <div className="bg-blue-50 p-1.5 py-3 md:p-0 md:py-0 md:border md:shadow-md shadow md:border-gray-100 overflow-hidden relative ">

        {/* HEADER */}
        <div className="hidden md:block px-5 py-3 bg-white">
          <h2 className="text-xl font-semibold text-gray-800">
            Shop By Category
          </h2>
        </div>

        {/* SLIDER */}
        <div className="relative group  lg:px-8 lg:py-8">

          {/* LEFT BUTTON */}
          {showLeftBtn && (
            <button
              onClick={() => scroll("left")}
              className="absolute left-0 cursor-pointer top-1/2 z-[100] -translate-y-1/2 z-10 bg-white  shadow-xl rounded-l-lg py-6 hover:bg-gray-50 transition hidden lg:block"
            >
              <ChevronLeft size={32} />
            </button>
          )}

          {/* ITEMS */}
          <div
            ref={scrollRef}
            onScroll={handleScrollPosition}
            className="grid grid-rows-2 space-y-3 md:space-y-0 grid-flow-col lg:flex lg:items-start gap-1 lg:gap-6 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory"
          >
            {categories.map((cat) => (
              <div
                key={cat.id}
                className="flex flex-col items-center w-24 lg:w-32 cursor-pointer group/item snap-start active:scale-95 transition-all duration-300"
              >
                {/* CARD */}
                <div className="relative w-20 h-20 lg:w-28 lg:h-28 bg-gradient-to-br from-white to-slate-50 border border-gray-100 rounded-2xl flex items-center justify-center p-3 shadow-sm transition-all duration-300 group-hover/item:shadow-xl group-hover/item:-translate-y-1 group-hover/item:border-blue-200">

                  {/* glow */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover/item:opacity-100 transition bg-blue-100 blur-2xl"></div>

                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="relative z-10 max-w-full max-h-full object-contain transition-transform duration-300 group-hover/item:scale-110"
                  />
                </div>

                {/* TEXT */}
                <span className="mt-2 lg:mt-3 text-[12px] lg:text-[14px] font-medium text-slate-700 text-center group-hover/item:text-blue-600 transition-colors">
                  {cat.name}
                </span>
              </div>
            ))}
          </div>

          {/* RIGHT BUTTON */}
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 cursor-pointer top-1/2 -translate-y-1/2 z-10 bg-white  shadow-xl rounded-l-lg py-6 hover:bg-gray-50 transition hidden lg:block"
          >
            <ChevronRight size={32} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategorySlider;