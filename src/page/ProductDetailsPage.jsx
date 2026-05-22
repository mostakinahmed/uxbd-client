import React, { useState } from 'react';
import {
  Star,
  ShoppingCart,
  Zap,
  ShieldCheck,
  Truck,
  RotateCcw,
  Plus,
  Minus,
  Heart
} from 'lucide-react';
import { Link } from 'react-router-dom';
import AutoProductSlider from '../component/AutoProductSlider';

const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('specification');

  const product = {
    title: "সহীহ্ হজ্জ ও উমরাহ্ পালন",
    author: "আল্লামা মুহাম্মদ নাসিরুদ্দীন আল-আলবানী",
    publisher: "তাওহীদ পাবলিকেশন্স",
    category: "ইসলামি বই",
    price: 49,
    originalPrice: 65,
    discount: 25,
    rating: 4.5,
    reviews: 124,
    stock: "In Stock",
    pages: 120,
    binding: "Hardcover",
    language: "Bengali",
    description:
      "এই বইটি সহীহ্ সুন্নাহর আলোকে হজ্জ ও উমরাহ পালনের সঠিক নিয়মাবলী বিস্তারিতভাবে বর্ণনা করে। এটি হজ্জ যাত্রীদের জন্য একটি নির্ভরযোগ্য গাইড।"
  };

  const handleQuantity = (type) => {
    if (type === 'inc') setQuantity((prev) => prev + 1);
    if (type === 'dec' && quantity > 1)
      setQuantity((prev) => prev - 1);
  };

  return (
    <div className="w-full min-h-screen md:mt-5  md:py-10">
      <div className="max-w-[95%] lg:max-w-[75%] mx-auto">

        {/* MAIN SECTION */}
        <div className="bg-white border border-gray-100 overflow-hidden">

          <div className="flex flex-col lg:flex-row gap-5 lg:gap-10 p-3 sm:p-5 lg:p-8">

            {/* IMAGE */}
            <div className="w-full lg:w-[25%]">
              <div className="aspect-[3/4] rounded overflow-hidden border border-gray-200">
                <img
                  src="https://m.media-amazon.com/images/I/71M8ss0CnHL._AC_UF1000,1000_QL80_.jpg"
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* THUMBNAILS */}
              <div className="flex gap-2 mt-2">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-14 h-14 sm:w-16 sm:h-16 border rounded-md overflow-hidden cursor-pointer hover:border-blue-500"
                  >
                    <img
                      src="https://placehold.co/80x80"
                      alt="thumb"
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* CONTENT */}
            <div className="flex-1 space-y-4 md:ml-20">

              {/* TITLE */}
              <div>
                <h1 className="text-lg sm:text-2xl lg:text-3xl font-bold text-gray-800 leading-snug">
                  {product.title}
                </h1>

                <p className="mt-1 text-sm sm:text-base text-blue-600 font-medium">
                  Author: {product.author}
                </p>

                {/* RATING */}
                <div className="flex flex-wrap items-center gap-3 mt-2">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={15}
                        fill={i < 4 ? "#f59e0b" : "none"}
                        className={
                          i < 4
                            ? "text-amber-500"
                            : "text-gray-300"
                        }
                      />
                    ))}

                    <span className="text-xs sm:text-sm text-gray-500 ml-1">
                      ({product.reviews} Reviews)
                    </span>
                  </div>

                  <span className="text-green-600 text-xs sm:text-sm font-semibold flex items-center gap-1">
                    <ShieldCheck size={14} />
                    {product.stock}
                  </span>
                </div>
              </div>

              {/* PRICE */}
              <div className="bg-blue-50 rounded-lg p-3 flex flex-wrap items-center gap-3">
                <span className="text-2xl sm:text-3xl font-bold text-gray-900">
                  TK. {product.price}
                </span>

                <span className="text-sm sm:text-lg text-gray-400 line-through">
                  TK. {product.originalPrice}
                </span>

                <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                  {product.discount}% OFF
                </span>
              </div>

              {/* QUANTITY */}
              <div className="flex items-center justify-between sm:justify-start gap-4">
                <span className="font-semibold text-sm sm:text-base text-gray-700">
                  Quantity
                </span>

                <div className="flex items-center border rounded-lg overflow-hidden">
                  <button
                    onClick={() => handleQuantity('dec')}
                    className="p-2 hover:bg-gray-100"
                  >
                    <Minus size={16} />
                  </button>

                  <span className="px-4 py-2 border-x font-bold text-sm">
                    {quantity}
                  </span>

                  <button
                    onClick={() => handleQuantity('inc')}
                    className="p-2 hover:bg-gray-100"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>

              {/* ACTION BUTTONS */}
              <div className="md:w-[60%] space-y-2 sm:space-y-0  flex gap-3">

                <button className="w-full sm:flex-1 bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 transition-all">
                  <ShoppingCart size={18} />
                  Add to Cart
                </button>

                <Link to="/place-order" className="w-full sm:flex-1">
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 transition-all">
                    <Zap size={18} />
                    Order Now
                  </button>
                </Link>

                <button className="hidden sm:flex p-3 border rounded-lg hover:bg-gray-50 text-gray-400 hover:text-red-500 transition-colors">
                  <Heart size={22} />
                </button>
              </div>

              {/* MOBILE WISHLIST */}
              <button className="sm:hidden w-full border rounded-lg py-3 flex items-center justify-center gap-2 text-gray-500 hover:text-red-500">
                <Heart size={18} />
                Add to Wishlist
              </button>

{/* TRUST BADGES */}
<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-gray-200">

  {/* DELIVERY */}
  <div className="flex items-center gap-3 bg-gray-50 hover:bg-blue-50 transition-all duration-200 rounded-xl px-4 py-3 border border-gray-100">
    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
      <Truck size={18} className="text-blue-600" />
    </div>

    <div className="text-left">
      <h4 className="text-sm font-semibold text-gray-800">
        Fast Delivery
      </h4>
      <p className="text-xs text-gray-500">
        Quick nationwide shipping
      </p>
    </div>
  </div>

  {/* RETURN */}
  <div className="flex items-center gap-3 bg-gray-50 hover:bg-blue-50 transition-all duration-200 rounded-xl px-4 py-3 border border-gray-100">
    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
      <RotateCcw size={18} className="text-blue-600" />
    </div>

    <div className="text-left">
      <h4 className="text-sm font-semibold text-gray-800">
        Easy Return
      </h4>
      <p className="text-xs text-gray-500">
        7 days return policy
      </p>
    </div>
  </div>

  {/* AUTHENTIC */}
  <div className="flex items-center gap-3 bg-gray-50 hover:bg-blue-50 transition-all duration-200 rounded-xl px-4 py-3 border border-gray-100">
    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
      <ShieldCheck size={18} className="text-blue-600" />
    </div>

    <div className="text-left">
      <h4 className="text-sm font-semibold text-gray-800">
        Authentic Product
      </h4>
      <p className="text-xs text-gray-500">
        100% original guarantee
      </p>
    </div>
  </div>

</div>



            </div>
          </div>

          {/* TABS */}
          <div className=" md:w-[50%] border-t border-blue-400">

            <div className="flex">
              {['specification', 'summary'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 py-3 text-xs mx-2 sm:text-sm font-bold uppercase transition-all ${
                    activeTab === tab
                      ? 'border-b-2 border-blue-600 text-blue-600 bg-blue-50'
                      : 'text-gray-500'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="p-4 sm:p-6">

              {activeTab === 'specification' ? (
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <tbody>
                      {[
                        { label: 'Title', value: product.title },
                        { label: 'Author', value: product.author },
                        { label: 'Publisher', value: product.publisher },
                        { label: 'Pages', value: product.pages },
                        { label: 'Binding', value: product.binding },
                        { label: 'Language', value: product.language }
                      ].map((row, i) => (
                        <tr
                          key={i}
                          className={i % 2 === 0 ? 'bg-gray-50' : ''}
                        >
                          <td className="py-3 px-3 font-semibold text-gray-600 w-[40%]">
                            {row.label}
                          </td>

                          <td className="py-3 px-3 text-gray-800">
                            {row.value}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  <h4 className="font-bold text-base sm:text-lg mb-2">
                    Product Summary
                  </h4>

                  {product.description}
                </div>
              )}

            </div>
          </div>
        </div>
      </div>

      <AutoProductSlider/>
    </div>
  );
};

export default ProductDetails;