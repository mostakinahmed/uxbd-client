import React from "react";

export default function SuccessModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Background */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl p-8 w-full max-w-sm text-center z-10 animate-fadeIn">

        {/* Icon */}
        <div className="flex justify-center">
          <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
            <span className="text-3xl">✅</span>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-900 mt-4">
          Order Confirmed!
        </h2>

        {/* Message */}
        <p className="text-gray-500 mt-2">
          Your order has been placed successfully. We will contact you soon.
        </p>

        {/* Button */}
        <button
          onClick={onClose}
          className="mt-6 w-full bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition"
        >
          OK
        </button>
      </div>
    </div>
  );
}