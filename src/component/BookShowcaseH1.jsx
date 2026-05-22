import React, { useRef, useState } from 'react';
import { ChevronRight, ChevronLeft, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const books = [
  {

    id: 1,
    title: "সহীহ্ হজ্জ ও উমরাহ্ পালন",
    author: "আল্লামা মুহাম্মদ নাসিরুদ্দীন...",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNFCnj5S1s8l6t2pveDOTvpIJVmFEZyUTsfg&s",
    discount: 25,
    originalPrice: 65,
    price: 49,
    rating: 3,
    reviews: 0,
    stock: true
  },
  {
    id: 2,
    title: "শিরক বিদআত ও কুসংস্কার মুক্ত হজ্জ",
    author: "ড. খ ম আব্দুর রাজ্জাক",
    image: "https://rukminim2.flixcart.com/image/480/640/l2nmnww0/regionalbooks/e/e/8/bangla-translation-of-relax-and-happy-dushchintahin-notun-original-imagdygyvmyvz3by.jpeg?q=90",
    discount: 41,
    originalPrice: 200,
    price: 119,
    rating: 4,
    reviews: 4,
    stock: true
  },
  {
    id: 3,
    title: "দুই ঈদ কোরবানী ও আকীকা",
    author: "মুফতী মুহাম্মদ উবাইদুল্লাহ",
    image: "https://m.media-amazon.com/images/I/41jEbOHAh8L._AC_UF1000,1000_QL80_.jpg",
    discount: 35,
    originalPrice: 260,
    price: 169,
    rating: 4,
    reviews: 1,
    stock: true
  }, {
    id: 1,
    title: "সহীহ্ হজ্জ ও উমরাহ্ পালন",
    author: "আল্লামা মুহাম্মদ নাসিরুদ্দীন...",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNFCnj5S1s8l6t2pveDOTvpIJVmFEZyUTsfg&s",
    discount: 25,
    originalPrice: 65,
    price: 49,
    rating: 3,
    reviews: 0,
    stock: true
  },
  {
    id: 2,
    title: "শিরক বিদআত ও কুসংস্কার মুক্ত হজ্জ",
    author: "ড. খ ম আব্দুর রাজ্জাক",
    image: "https://rukminim2.flixcart.com/image/480/640/l2nmnww0/regionalbooks/e/e/8/bangla-translation-of-relax-and-happy-dushchintahin-notun-original-imagdygyvmyvz3by.jpeg?q=90",
    discount: 41,
    originalPrice: 200,
    price: 119,
    rating: 4,
    reviews: 4,
    stock: true
  },
  {
    id: 3,
    title: "দুই ঈদ কোরবানী ও আকীকা",
    author: "মুফতী মুহাম্মদ উবাইদুল্লাহ",
    image: "https://m.media-amazon.com/images/I/41jEbOHAh8L._AC_UF1000,1000_QL80_.jpg",
    discount: 35,
    originalPrice: 260,
    price: 169,
    rating: 4,
    reviews: 1,
    stock: true
  },
  {
    id: 4,
    title: "নারীর হজ্জ ও উমরাহ",
    author: "ড. আবু বকর মুহাম্মাদ যাকারিয়া",
    image: "https://m.media-amazon.com/images/I/71M8ss0CnHL._AC_UF1000,1000_QL80_.jpg",
    discount: 21,
    originalPrice: 100,
    price: 79,
    rating: 5,
    reviews: 7,
    stock: true
  },
  {
    id: 5,
    title: "হজ্জ-উমরাহ বিশ্বকোষ",
    author: "সামি ইবনু আব্দুল্লাহ ইবনু আহমাদ...",
    image: "https://placehold.co/180x250/1d4ed8/white?text=Book+5",
    discount: 23,
    originalPrice: 4000,
    price: 3099,
    rating: 4,
    reviews: 2,
    stock: true
  },
  {
    id: 6,
    title: "কুরবানী ও জাবীহুল্লাহ",
    author: "ড. খোন্দকার আব্দুল্লাহ জাহাঙ্গীর",
    image: "https://placehold.co/180x250/f8fafc/black?text=Book+6",
    discount: 28,
    originalPrice: 40,
    price: 29,
    rating: 4,
    reviews: 36,
    stock: true
  },
  {
    id: 2,
    title: "শিরক বিদআত ও কুসংস্কার মুক্ত হজ্জ",
    author: "ড. খ ম আব্দুর রাজ্জাক",
    image: "https://placehold.co/180x250/1e293b/white?text=Book+2",
    discount: 41,
    originalPrice: 200,
    price: 119,
    rating: 4,
    reviews: 4,
    stock: true
  },
  {
    id: 3,
    title: "দুই ঈদ কোরবানী ও আকীকা",
    author: "মুফতী মুহাম্মদ উবাইদুল্লাহ",
    image: "https://placehold.co/180x250/d946ef/white?text=Book+3",
    discount: 35,
    originalPrice: 260,
    price: 169,
    rating: 4,
    reviews: 1,
    stock: true
  },
  {
    id: 2,
    title: "শিরক বিদআত ও কুসংস্কার মুক্ত হজ্জ",
    author: "ড. খ ম আব্দুর রাজ্জাক",
    image: "https://placehold.co/180x250/1e293b/white?text=Book+2",
    discount: 41,
    originalPrice: 200,
    price: 119,
    rating: 4,
    reviews: 4,
    stock: true
  },
  {
    id: 3,
    title: "দুই ঈদ কোরবানী ও আকীকা",
    author: "মুফতী মুহাম্মদ উবাইদুল্লাহ",
    image: "https://placehold.co/180x250/d946ef/white?text=Book+3",
    discount: 35,
    originalPrice: 260,
    price: 169,
    rating: 4,
    reviews: 1,
    stock: true
  },
];


const BookShowcaseH1 = () => {
  const scrollRef = useRef(null);
  const [showLeftBtn, setShowLeftBtn] = useState(false);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;

      const scrollAmount =
        direction === 'left'
          ? -clientWidth * 0.8
          : clientWidth * 0.8;

      scrollRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      setShowLeftBtn(scrollRef.current.scrollLeft > 10);
    }
  };

  return (
    <div className="w-full lg:max-w-[75%] mx-auto md:py-6 py-5 px-2 lg:px-0">
      <div className="bg-white shadow-md overflow-hidden relative">

        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4">
          <h2 className="text-lg lg:text-xl font-medium text-gray-800 tracking-tight">
            হজ্জ-উমরাহ ও কুরবানির বই সমূহ
          </h2>

          {/* Desktop button same as your previous code */}
          <Link to="/view-all">
            <button className="hidden lg:block text-xs lg:text-sm font-medium text-blue-500 border border-blue-500 px-3 lg:px-6 py-1.5 rounded hover:bg-blue-500 hover:text-white transition-colors">
              View All
            </button>
          </Link>

        </div>

        {/* ================= MOBILE VERSION ================= */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-8 px-4 pb-6 lg:hidden">
          {books.slice(0, 4).map((book) => (
            <div
              key={book.id}
              className="flex flex-col items-center cursor-pointer"
            >
              {/* Image */}
              <div className="relative w-full aspect-[2/3] overflow-hidden shadow-sm">
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Info */}
              <div className="mt-3 w-full text-center space-y-1">
                <h3 className="text-sm font-medium text-gray-700 leading-tight line-clamp-2 h-10 px-1">
                  {book.title}
                </h3>

                <p className="text-[11px] text-gray-500 truncate px-2">
                  {book.author}
                </p>

                {/* Rating */}
                <div className="flex items-center justify-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={11}
                      fill={i < book.rating ? "#f59e0b" : "none"}
                      className={
                        i < book.rating
                          ? "text-amber-500"
                          : "text-gray-200"
                      }
                    />
                  ))}

                  <span className="text-[10px] text-gray-400 ml-1">
                    ({book.reviews})
                  </span>
                </div>

                <p className="text-[11px] text-green-600 font-medium">
                  Product In Stock
                </p>

                {/* Price */}
                <div className="flex items-center justify-center gap-2">
                  <span className="text-[12px] text-gray-400 line-through">
                    TK. {book.originalPrice}
                  </span>

                  <span className="text-[14px] font-bold text-gray-800 uppercase">
                    TK. {book.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile bottom button */}
        <div className="flex justify-center  pb-6 lg:hidden">
            <Link to="/view-all">
            <button className="lg:hidden text-sm font-medium text-blue-500 border border-blue-500 px-5 lg:px-6 py-1.5 rounded hover:bg-blue-500 hover:text-white transition-colors">
              View All
            </button>
          </Link>

          
        </div>

        {/* ================= DESKTOP VERSION (UNCHANGED) ================= */}
        <div className="hidden lg:block relative group px-5 pb-8 pt-2">

          {/* Left Button */}
          {showLeftBtn && (
            <button
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-200 py-8 px-1 shadow-md rounded-r-md hover:bg-gray-50 transition-all"
            >
              <ChevronLeft size={24} className="text-gray-700" />
            </button>
          )}

          {/* Slider */}
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex items-start gap-5 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory"
          >
            {books.map((book) => (
              <div
                key={book.id}
                className="flex flex-col items-center flex-shrink-0 w-[210px] cursor-pointer snap-start group"
              >
                {/* Book Cover */}
                <div className="relative w-[140px] aspect-[2/3] overflow-hidden shadow-sm group-hover:shadow-md transition-shadow">
                  <img
                    src={book.image}
                    alt={book.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Product Info */}
                <div className="mt-3 w-full text-center space-y-1">
                  <h3 className="text-md font-medium text-gray-700 leading-tight tracking-tight line-clamp-2 h-10 px-1">
                    {book.title}
                  </h3>

                  <p className="text-[12px] text-gray-500 truncate px-2">
                    {book.author}
                  </p>

                  {/* Rating */}
                  <div className="flex items-center justify-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={12}
                        fill={i < book.rating ? "#f59e0b" : "none"}
                        className={
                          i < book.rating
                            ? "text-amber-500"
                            : "text-gray-200"
                        }
                      />
                    ))}

                    <span className="text-[10px] text-gray-400 ml-1">
                      ({book.reviews})
                    </span>
                  </div>

                  <p className="text-[12px] text-green-600 font-medium">
                    Product In Stock
                  </p>

                  {/* Pricing */}
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-[13px] text-gray-400 line-through">
                      TK. {book.originalPrice}
                    </span>

                    <span className="text-[14px] font-bold text-gray-800 uppercase">
                      TK. {book.price}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Button */}
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-200 py-8 px-1 shadow-md rounded-l-md hover:bg-gray-50 transition-all"
          >
            <ChevronRight size={24} className="text-gray-700" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookShowcaseH1;