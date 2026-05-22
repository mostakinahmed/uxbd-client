import React, { useRef, useState } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const authors = [
  {
    id: 1,
    name: "শায়খ আহমাদুল্লাহ",
    ename: "Shaykh Ahmadullah",
    image: "https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/e634/live/630cd2f0-31c1-11f1-974c-b10fb48f7e20.jpg.webp"
  },
  {
    id: 2,
    name: "টেন মিনিট স্কুল",
    ename: "10 Minute School",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR89IIN5R3jVcCWi-MbvPVwwxixGSnfzu47Cg&s"
  },
  {
    id: 3,
    name: "রবীন্দ্রনাথ ঠাকুর",
    ename: "Rabindranath Tagore",
    image: "https://www.satv.tv/wp-content/uploads/2023/05/Robindronath.jpg"
  },
  {
    id: 4,
    name: "ড. মিজানুর রহমান আজহারী",
    ename: "Dr. Mizanur Rahman Azhari",
    image: "https://pbs.twimg.com/profile_images/1339920183159230467/wHDa21Gw_400x400.jpg"
  },
  {
    id: 5,
    name: "আরিফ আজাদ",
    ename: "Arif Azad",
    image: "https://arifazad.com/wp-content/uploads/2021/07/207975994_232846598655025_3654725726196052157_n.jpg"
  },
  {
    id: 6,
    name: "মির্জা গালিব",
    ename: "Mirza Ghalib",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ47ylZSTMQ61exuZjor6MoI_s9mqrxQ99mUA&s"
  },
  {
    id: 7,
    name: "হুমায়ূন আহমেদ",
    ename: "Humayun Ahmed",
    image: "https://files.dainikshiksha.com/154097/conversions/Humayun-Ahmed-medium.webp"
  }
];

const AuthorSlider = () => {
  const scrollRef = useRef(null);
  const [showLeftBtn, setShowLeftBtn] = useState(false);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      const scrollAmount = direction === 'left' ? -clientWidth * 0.8 : clientWidth * 0.8;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      setShowLeftBtn(scrollRef.current.scrollLeft > 10);
    }
  };

  return (
    <div className="w-full px-2 md:px-0 lg:max-w-[75%] mx-auto md:py-">
      <div className="bg-white shadow-md border border-slate-100 overflow-hidden relative">

        {/* Header Section */}
        <div className="flex items-center justify-between px-3 py-4 ">
          <h2 className="hidden md:block text-lg lg:text-xl font-semibold text-gray-800 tracking-tight">Buy Books of Top Authors</h2>
          <h2 className="md:hidden text-lg lg:text-xl font-semibold text-gray-800 tracking-tight">Popular Authors</h2>
          <button className="text-xs lg:text-sm font-medium text-blue-500 border border-blue-500 px-3 lg:px-6 py-1.5 rounded hover:bg-blue-500 hover:text-white transition-colors">
            View All
          </button>
        </div>


        {/* Slider Section */}
        <div className="relative px-2 lg:px-10 lg:py-2 bg-white">

          {/* Left Arrow (Desktop Only) */}
          {showLeftBtn && (
            <button
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-200 py-6 shadow-md rounded-r-md hover:bg-gray-50 transition-all hidden lg:block"
            >
              <ChevronLeft size={28} className="text-gray-700" />
            </button>
          )}

          {/* Authors List (Responsive Grid for Mobile, Flex for Desktop) */}
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="grid grid-rows-2 grid-flow-col lg:flex lg:items-start gap-x-5 lg:gap-x-8 gap-y-5 overflow-x-auto no-scrollbar pb-6 lg:mb-7 scroll-smooth snap-x snap-mandatory"
          >
            {authors.map((author) => (

            <Link to={`/view-all/${author.ename}`}>
                 <div
                key={author.id}
                className="flex flex-col items-center flex-shrink-0 w-22 lg:w-40 cursor-pointer group/item snap-start"
              >
                {/* Circular Image Wrapper - Scaled for mobile */}
                <div className="w-22 h-22 lg:w-36 lg:h-36 rounded-full border-2 border-gray-200 overflow-hidden p-0.5 transition-all duration-300 group-hover/item:border-blue-400 group-hover/item:shadow-lg">
                  <img
                    src={author.image}
                    alt={author.name}
                    className="w-full h-full object-cover rounded-full transition-all"
                    onError={(e) => { e.target.src = "https://via.placeholder.com/150"; }}
                  />
                </div>

                {/* Author Name - Adjusted font size for mobile */}
                <span className="mt-3 lg:mt-4 text-[12px] lg:text-[15px] font-medium text-gray-700 text-center leading-tight hover:text-blue-600 transition-colors line-clamp-1">
                  {author.name}
                </span>
              </div>
              </Link>
             
            ))}
          </div>

          {/* Right Arrow (Desktop Only) */}
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-200 py-6 shadow-md rounded-l-md hover:bg-gray-50 transition-all hidden lg:block"
          >
            <ChevronRight size={32} className="text-slate-700" />
          </button>

        </div>
      </div>
    </div>
  );
};

export default AuthorSlider;