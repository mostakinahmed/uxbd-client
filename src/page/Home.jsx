import React from "react";

const MangoLandingPage = () => {
  return (
    <div className="bg-gray-200 text-gray-800 min-h-screen">

      <div className="max-w-5xl mx-auto px-4 py-6">

        {/* Header */}
        <div className="bg-green-600 text-white text-center py-4 rounded-md mb-6">
          <h1 className="text-2xl md:text-4xl font-bold">
            সরাসরি রাজশাহীর ফ্রেশ আম কিনুন
          </h1>
        </div>

        {/* Hero Section */}
        <div className="text-center">

          <img
            src="https://i.ibb.co/8x6V4N2/mango.png"
            alt="Mango"
            className="w-[320px] max-w-full mx-auto bg-white p-3 rounded-lg"
          />

          <a
            href="#order"
            className="inline-block mt-5 bg-green-600 hover:bg-green-700 transition text-white text-xl md:text-2xl font-bold px-8 py-3 rounded-xl"
          >
            অর্ডার করতে ক্লিক করুন
          </a>

        </div>

        {/* Benefits Title */}
        <div className="bg-green-600 text-white text-center py-3 rounded-md mt-10 mb-6">
          <h2 className="text-2xl md:text-4xl font-bold">
            কেন আমাদের আম কিনবেন?
          </h2>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

          <div className="bg-white shadow-md rounded-lg p-5 text-center">
            <h3 className="text-2xl font-bold text-green-600 mb-3">
              ফ্রেশ আম
            </h3>

            <p className="leading-7 text-gray-700">
              বাগান থেকে সরাসরি সংগ্রহ করা সম্পূর্ণ ফ্রেশ ও রসালো আম।
            </p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-5 text-center">
            <h3 className="text-2xl font-bold text-green-600 mb-3">
              কেমিক্যাল মুক্ত
            </h3>

            <p className="leading-7 text-gray-700">
              কোনো প্রকার ক্ষতিকর কেমিক্যাল ছাড়াই প্রাকৃতিকভাবে পাকানো।
            </p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-5 text-center">
            <h3 className="text-2xl font-bold text-green-600 mb-3">
              হোম ডেলিভারি
            </h3>

            <p className="leading-7 text-gray-700">
              সারা বাংলাদেশে দ্রুত ও নিরাপদ ডেলিভারি সুবিধা।
            </p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-5 text-center">
            <h3 className="text-2xl font-bold text-green-600 mb-3">
              মিষ্টি স্বাদ
            </h3>

            <p className="leading-7 text-gray-700">
              প্রতিটি আমে পাবেন আসল মিষ্টি ও সুস্বাদু স্বাদ।
            </p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-5 text-center">
            <h3 className="text-2xl font-bold text-green-600 mb-3">
              সেরা মান
            </h3>

            <p className="leading-7 text-gray-700">
              প্রতিটি আম বাছাই করে মান নিশ্চিত করা হয়।
            </p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-5 text-center">
            <h3 className="text-2xl font-bold text-green-600 mb-3">
              বিশ্বাসযোগ্য সেবা
            </h3>

            <p className="leading-7 text-gray-700">
              হাজারো গ্রাহকের আস্থার সাথে দীর্ঘদিন ধরে সেবা প্রদান।
            </p>
          </div>

        </div>

        {/* Order Button */}
        <div className="text-center mt-8">

          <a
            href="#order"
            className="inline-block bg-green-600 hover:bg-green-700 transition text-white text-xl md:text-2xl font-bold px-8 py-3 rounded-xl"
          >
            অর্ডার করতে ক্লিক করুন
          </a>

        </div>

        {/* Usage Section */}
        <div className="bg-green-600 text-white text-center py-3 rounded-md mt-10 mb-5">
          <h2 className="text-2xl md:text-4xl font-bold">
            খাওয়ার নিয়ম
          </h2>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <p className="text-lg leading-8">
            আম ভালোভাবে ধুয়ে সরাসরি খেতে পারবেন অথবা জুস, স্মুদি ও বিভিন্ন ডেজার্ট তৈরিতে ব্যবহার করতে পারবেন।
          </p>
        </div>

        {/* Price Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mt-8 text-center">

          <h2 className="text-5xl font-bold text-red-600 mb-4">
            মূল্য
          </h2>

          <p className="text-2xl line-through text-gray-500 mb-3">
            রেগুলার মূল্য ৳১৫০০
          </p>

          <p className="text-4xl font-bold mb-3">
            অফার মূল্য ৳১২০০
          </p>

          <p className="text-2xl font-bold text-red-600">
            ডেলিভারি চার্জ সম্পূর্ণ ফ্রি
          </p>

        </div>

        {/* Order Form */}
        <div
          id="order"
          className="bg-white rounded-lg shadow-md mt-10 p-6 md:p-10"
        >

          <div className="bg-green-600 text-white text-center py-3 rounded-md mb-8">
            <h2 className="text-2xl md:text-3xl font-bold">
              অর্ডার করতে নিচের ফর্মটি পূরণ করুন
            </h2>
          </div>

          <form className="space-y-5">

            <input
              type="text"
              placeholder="আপনার নাম লিখুন"
              className="w-full border border-gray-300 rounded-md px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
            />

            <input
              type="text"
              placeholder="মোবাইল নাম্বার লিখুন"
              className="w-full border border-gray-300 rounded-md px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
            />

            <textarea
              rows="5"
              placeholder="সম্পূর্ণ ঠিকানা লিখুন"
              className="w-full border border-gray-300 rounded-md px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 transition text-white text-xl font-bold py-4 rounded-md"
            >
              অর্ডার কনফার্ম করুন
            </button>

          </form>

        </div>

      </div>

      {/* Footer */}
      <footer className="bg-black text-white text-center py-5 mt-10">
        Design & Developed By UniquExpressBD
      </footer>

    </div>
  );
};

export default MangoLandingPage;