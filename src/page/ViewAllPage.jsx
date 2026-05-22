import React, { useState } from "react";
import {
  Star,
  SlidersHorizontal,
  X,
  ChevronDown,
} from "lucide-react";
import { Link } from "react-router-dom";

const books = [
  {
    id: 1,
    title: "সহীহ্ হজ্জ ও উমরাহ্ পালন",
    author: "আল্লামা মুহাম্মদ নাসিরুদ্দীন...",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNFCnj5S1s8l6t2pveDOTvpIJVmFEZyUTsfg&s",
    originalPrice: 65,
    price: 49,
    rating: 3,
    reviews: 0,
    category: "হজ্জ",
  },
  {
    id: 2,
    title: "শিরক বিদআত ও কুসংস্কার মুক্ত হজ্জ",
    author: "ড. খ ম আব্দুর রাজ্জাক",
    image:
      "https://rukminim2.flixcart.com/image/480/640/l2nmnww0/regionalbooks/e/e/8/bangla-translation-of-relax-and-happy-dushchintahin-notun-original-imagdygyvmyvz3by.jpeg?q=90",
    originalPrice: 200,
    price: 119,
    rating: 4,
    reviews: 4,
    category: "হজ্জ",
  },
  {
    id: 3,
    title: "দুই ঈদ কোরবানী ও আকীকা",
    author: "মুফতী মুহাম্মদ উবাইদুল্লাহ",
    image:
      "https://m.media-amazon.com/images/I/41jEbOHAh8L._AC_UF1000,1000_QL80_.jpg",
    originalPrice: 260,
    price: 169,
    rating: 4,
    reviews: 1,
    category: "কুরবানী",
  },
  {
    id: 4,
    title: "নারীর হজ্জ ও উমরাহ",
    author: "ড. আবু বকর মুহাম্মাদ যাকারিয়া",
    image:
      "https://m.media-amazon.com/images/I/71M8ss0CnHL._AC_UF1000,1000_QL80_.jpg",
    originalPrice: 100,
    price: 79,
    rating: 5,
    reviews: 7,
    category: "উমরাহ",
  },
  {
    id: 5,
    title: "হজ্জ-উমরাহ বিশ্বকোষ",
    author: "সামি ইবনু আব্দুল্লাহ...",
    image: "https://placehold.co/300x420/2563eb/ffffff?text=Book+5",
    originalPrice: 4000,
    price: 3099,
    rating: 4,
    reviews: 2,
    category: "উমরাহ",
  },
  {
    id: 6,
    title: "কুরবানী ও জাবীহুল্লাহ",
    author: "ড. খোন্দকার আব্দুল্লাহ জাহাঙ্গীর",
    image: "https://placehold.co/300x420/0f172a/ffffff?text=Book+6",
    originalPrice: 40,
    price: 29,
    rating: 4,
    reviews: 36,
    category: "কুরবানী",
  },
];

const categories = ["সব", "হজ্জ", "উমরাহ", "কুরবানী"];

const sortOptions = [
  "Best Seller",
  "New Released",
  "Price - Low to High",
  "Price - High to Low",
  "Discount - Low to High",
  "Discount - High to Low",
];

const ViewAllPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("সব");
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState("");

  const filteredBooks =
    selectedCategory === "সব"
      ? books
      : books.filter((book) => book.category === selectedCategory);

  return (
    <div className="w-full lg:max-w-[75%]  mx-auto px-3 md:mt-6 lg:px-0 lg:py-10">

      {/* MOBILE FILTER BUTTON */}
      <div className="flex gap-3">
        <div className="lg:hidden mb-4">
          <button
            onClick={() => setMobileFilterOpen(true)}
            className="flex items-center gap-2 bg-white  px-4 py-2 rounded-xl text-sm font-medium shadow-sm"
          >
            <SlidersHorizontal size={16} />
            Filters
          </button>
        </div>
        {/* TOPBAR */}
        <div className="bg-white w-full md:hidden  px-5 py-1.5 mb-5 flex items-center rounded-xl justify-between shadow-sm">

          <h2 className=" font-medium text-gray-800">
            সব বই সমূহ
          </h2>

          <p className="text-sm text-gray-500">
            {filteredBooks.length}
          </p>

        </div>

      </div>

      <div className="flex gap-6">

        {/* OVERLAY */}
        {mobileFilterOpen && (
          <div
            onClick={() => setMobileFilterOpen(false)}
            className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          />
        )}

        {/* SIDEBAR */}
        <div
          className={`
            fixed lg:sticky top-0 left-0 z-50 lg:z-0
            h-screen lg:h-fit overflow-y-auto
            w-[290px] lg:w-[270px]
            bg-white border-r lg:border border-gray-200
            p-5 rounded-none
            transition-transform duration-300
            ${mobileFilterOpen
              ? "translate-x-0"
              : "-translate-x-full lg:translate-x-0"
            }
          `}
        >

          {/* MOBILE HEADER */}
          <div className="flex items-center justify-between mb-6 lg:hidden">
            <h2 className="text-lg font-bold">Filters</h2>

            <button onClick={() => setMobileFilterOpen(false)}>
              <X size={22} />
            </button>
          </div>

          {/* DESKTOP HEADER */}
          <h2 className="hidden lg:block text-xl font-bold mb-6 text-gray-800">
            Filter Books
          </h2>

          {/* CATEGORY SECTION */}
          <div className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">

            <div className="px-4 py-4 border-b border-gray-100 bg-gray-50">
              <h3 className="text-base font-bold text-gray-800">
                Categories
              </h3>
            </div>

            <div className="p-3 space-y-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setSelectedCategory(cat);
                    setMobileFilterOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200
                    ${selectedCategory === cat
                      ? "bg-blue-600 text-white shadow-md"
                      : "hover:bg-gray-100 text-gray-700"
                    }
                  `}
                >
                  {cat}

                  {selectedCategory === cat && (
                    <ChevronDown size={16} className="rotate-[-90deg]" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* PRICE SECTION */}
          <div className="mt-6 rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">

            <div className="px-4 py-4 border-b border-gray-100 bg-gray-50">
              <h3 className="text-base font-bold text-gray-800">
                Price Range
              </h3>
            </div>

            <div className="p-4">

              <input
                type="range"
                className="w-full accent-blue-600"
              />

              <div className="flex justify-between text-xs text-gray-500 mt-3">
                <span>TK 0</span>
                <span>TK 5000</span>
              </div>

            </div>
          </div>

          {/* SORT SECTION */}
          <div className="mt-6 rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">

            {/* HEADER */}
            <div className="flex items-center justify-between px-4 py-4 border-b border-gray-100 bg-gray-50">

              <h2 className="text-base font-bold text-gray-800">
                Sort
              </h2>

              <button
                onClick={() => setSelectedSort("")}
                className="text-xs font-semibold text-blue-600 hover:text-blue-700 transition"
              >
                Reset
              </button>

            </div>

            {/* OPTIONS */}
            <div className="p-3 space-y-1">

              {sortOptions.map((item, index) => (
                <label
                  key={index}
                  className="group flex items-center gap-3 px-3 py-3 rounded-xl cursor-pointer hover:bg-blue-50 transition-all duration-200"
                >

                  {/* CUSTOM RADIO */}
                  <div className="relative">

                    <input
                      type="radio"
                      name="sort"
                      value={item}
                      checked={selectedSort === item}
                      onChange={(e) =>
                        setSelectedSort(e.target.value)
                      }
                      className="peer hidden"
                    />

                    <div className="w-5 h-5 rounded-full border-2 border-gray-300 peer-checked:border-blue-600 transition" />

                    <div className="absolute inset-[5px] rounded-full bg-blue-600 scale-0 peer-checked:scale-100 transition-transform duration-200" />

                  </div>

                  {/* TEXT */}
                  <span className="text-sm font-medium text-gray-700 group-hover:text-blue-600 transition">
                    {item}
                  </span>

                </label>
              ))}

            </div>
          </div>

        </div>

        {/* PRODUCTS */}
        <div className="flex-1 min-w-0">

          {/* TOPBAR */}
          <div className="bg-white hidden md:flex  px-5 py-2.5 mb-5 flex items-center justify-between shadow-sm">

            <h2 className="text-lg font-bold text-gray-800">
              সব বই সমূহ
            </h2>

            <p className="text-sm text-gray-500">
              {filteredBooks.length} Products
            </p>

          </div>

          {/* PRODUCT GRID */}
          <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-5 gap-3 md:gap-4 -mt-1.5">

            {filteredBooks.map((book) => (
              <Link
                key={book.id}
                to="/view-all/details"
              >

                <div className="group flex flex-col items-center cursor-pointer p-3  border border-gray-200 hover:border-blue-300 hover:shadow-lg bg-white transition-all duration-300">

                  {/* IMAGE */}
                  <div className="w-full aspect-[2/3] overflow-hidden  bg-gray-100">

                    <img
                      src={book.image}
                      alt={book.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />

                  </div>

                  {/* INFO */}
                  <div className="mt-3 w-full text-center space-y-1">

                    <h3 className="text-sm font-semibold text-gray-700 line-clamp-2 h-10">
                      {book.title}
                    </h3>

                    <p className="text-xs text-gray-500 truncate">
                      {book.author}
                    </p>

                    {/* RATING */}
                    <div className="flex justify-center gap-0.5">

                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={13}
                          fill={i < book.rating ? "#f59e0b" : "none"}
                          className={
                            i < book.rating
                              ? "text-amber-500"
                              : "text-gray-200"
                          }
                        />
                      ))}

                    </div>

                    <p className="text-xs font-medium text-green-600">
                      In Stock
                    </p>

                    {/* PRICE */}
                    <div className="flex justify-center items-center gap-2 pt-1">

                      <span className="text-xs text-gray-400 line-through">
                        TK {book.originalPrice}
                      </span>

                      <span className="text-sm font-bold text-gray-900">
                        TK {book.price}
                      </span>

                    </div>

                  </div>

                </div>

              </Link>
            ))}

          </div>

        </div>

      </div>
    </div>
  );
};

export default ViewAllPage;