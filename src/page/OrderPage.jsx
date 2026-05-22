import React, { useState } from 'react';
import { 
  MapPin, 
  Truck, 
  CreditCard, 
  ShieldCheck, 
  ChevronRight,
  Phone,
  User,
  Mail,
  Home
} from 'lucide-react';

const OrderPage = () => {
  const [paymentMethod, setPaymentMethod] = useState('cod');

  // Sample Cart Data
  const cartItems = [
    { id: 1, title: "সহীহ্ হজ্জ ও উমরাহ্ পালন", price: 49, qty: 1, image: "https://placehold.co/50x70/22c55e/white" },
    { id: 2, title: "শিরক বিদআত ও কুসংস্কার মুক্ত হজ্জ", price: 119, qty: 2, image: "https://placehold.co/50x70/1e293b/white" }
  ];

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.qty), 0);
  const shippingCharge = 60;
  const total = subtotal + shippingCharge;

  return (
    <div className="w-full md:mt-16   min-h-screen ">
      <div className="max-w-[95%] lg:max-w-[75%] mx-auto">
      

        <div className="flex flex-col lg:flex-row gap-3">
          
          {/* LEFT COLUMN: SHIPPING FORM */}
          <div className="flex-1 space-y-4">
            
            {/* 1. SHIPPING ADDRESS */}
            <div className="bg-white  border border-gray-100 p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
                  <MapPin size={22} />
                </div>
                <h2 className="text-xl font-bold text-gray-800">Shipping Information</h2>
              </div>

              <form className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-600 flex items-center gap-2">
                    <User size={16} /> Full Name *
                  </label>
                  <input type="text" placeholder="Enter your full name" className="w-full px-4 py-2.5 rounded-lg border border-gray-200 outline-none focus:ring-2 ring-blue-100 focus:border-blue-500 transition-all" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-600 flex items-center gap-2">
                    <Phone size={16} /> Phone Number *
                  </label>
                  <input type="tel" placeholder="01XXXXXXXXX" className="w-full px-4 py-2.5 rounded-lg border border-gray-200 outline-none focus:ring-2 ring-blue-100 focus:border-blue-500 transition-all" />
                </div>

                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm font-semibold text-gray-600 flex items-center gap-2">
                    <Mail size={16} /> Email Address (Optional)
                  </label>
                  <input type="email" placeholder="example@mail.com" className="w-full px-4 py-2.5 rounded-lg border border-gray-200 outline-none focus:ring-2 ring-blue-100 focus:border-blue-500 transition-all" />
                </div>

                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm font-semibold text-gray-600 flex items-center gap-2">
                    <Home size={16} /> Detailed Address *
                  </label>
                  <textarea rows="3" placeholder="House/Flat No, Area, Landmark..." className="w-full px-4 py-2.5 rounded-lg border border-gray-200 outline-none focus:ring-2 ring-blue-100 focus:border-blue-500 transition-all resize-none"></textarea>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-600">City / District *</label>
                  <select className="w-full px-4 py-2.5 rounded-lg border border-gray-200 outline-none bg-white">
                    <option>Select District</option>
                    <option>Dhaka</option>
                    <option>Chattogram</option>
                    <option>Sylhet</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-600">Area / Upazila *</label>
                  <select className="w-full px-4 py-2.5 rounded-lg border border-gray-200 outline-none bg-white">
                    <option>Select Area</option>
                  </select>
                </div>
              </form>
            </div>

            {/* 2. PAYMENT METHOD */}
            <div className="bg-white  border border-gray-100 p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-amber-100 p-2 rounded-lg text-amber-600">
                  <CreditCard size={22} />
                </div>
                <h2 className="text-xl font-bold text-gray-800">Payment Method</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label className={`flex items-center gap-4 p-4 border rounded-xl cursor-pointer transition-all ${paymentMethod === 'cod' ? "border-blue-500 bg-blue-50" : "hover:bg-gray-50"}`}>
                  <input type="radio" name="payment" className="hidden" onChange={() => setPaymentMethod('cod')} checked={paymentMethod === 'cod'} />
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${paymentMethod === 'cod' ? "border-blue-600" : "border-gray-300"}`}>
                    {paymentMethod === 'cod' && <div className="w-2.5 h-2.5 bg-blue-600 rounded-full" />}
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">Cash on Delivery</p>
                    <p className="text-xs text-gray-500">Pay when you receive the product</p>
                  </div>
                </label>

                <label className={`flex items-center gap-4 p-4 border rounded-xl cursor-pointer transition-all ${paymentMethod === 'online' ? "border-blue-500 bg-blue-50" : "hover:bg-gray-50"}`}>
                  <input type="radio" name="payment" className="hidden" onChange={() => setPaymentMethod('online')} checked={paymentMethod === 'online'} />
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${paymentMethod === 'online' ? "border-blue-600" : "border-gray-300"}`}>
                    {paymentMethod === 'online' && <div className="w-2.5 h-2.5 bg-blue-600 rounded-full" />}
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">Online Payment</p>
                    <p className="text-xs text-gray-500">bKash, Nagad, Rocket or Card</p>
                  </div>
                </label>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: ORDER SUMMARY */}
          <div className="w-full lg:w-[400px] space-y-6">
            <div className="bg-white border border-gray-100 p-6  sticky top-[100px]">
              <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                Order Summary
              </h2>

              {/* ITEM LIST */}
              <div className="space-y-4 mb-6 max-h-[300px] overflow-y-auto no-scrollbar">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="w-12 h-16 bg-gray-100 rounded-md overflow-hidden flex-shrink-0">
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-gray-700 line-clamp-1">{item.title}</p>
                      <p className="text-xs text-gray-500">Qty: {item.qty} × TK. {item.price}</p>
                    </div>
                    <p className="text-sm font-bold text-gray-800">TK. {item.price * item.qty}</p>
                  </div>
                ))}
              </div>

              <hr className="mb-6" />

              {/* COST BREAKDOWN */}
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>TK. {subtotal}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping Charge</span>
                  <span>TK. {shippingCharge}</span>
                </div>
                <div className="flex justify-between text-gray-900 font-black text-xl pt-3 border-t">
                  <span>Total</span>
                  <span className="text-blue-600">TK. {total}</span>
                </div>
              </div>

              {/* VOUCHER INPUT */}
              <div className="flex gap-2 mb-8">
                <input type="text" placeholder="Promo code" className="flex-1 border rounded-lg px-3 py-2 text-sm outline-none focus:border-blue-500" />
                <button className="bg-gray-800 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-black transition-all">Apply</button>
              </div>

              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-blue-200">
                Confirm Order <ShieldCheck size={20} />
              </button>

              <div className="mt-6 flex items-center justify-center gap-2 text-[11px] text-gray-400 uppercase tracking-widest font-bold">
                <Truck size={14} /> Home Delivery in 2-3 Days
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default OrderPage;