import React, { useState } from "react";

const MangoLandingPage = () => {
    // Packages Data
    const initialPackages = [
        {
            id: 1,
            name: "রেগুলার ম্যাঙ্গো প্যাক (হিমসাগর + ল্যাংড়া)",
            pricePerKg: 150,
            quantity: 5, // Default 5 KG
            selected: true,
            minQty: 5
        },
        {
            id: 2,
            name: "প্রিমিয়াম ফ্যামিলি প্যাক (হিমসাগর + ফজলি)",
            pricePerKg: 180,
            quantity: 10, // Default 10 KG
            selected: false,
            minQty: 5
        },
        {
            id: 3,
            name: "মেগা ফিস্ট উৎসব প্যাক (মিক্সড প্রিমিয়াম আম)",
            pricePerKg: 220,
            quantity: 20, // Default 20 KG
            selected: false,
            minQty: 10
        }
    ];

    // States
    const [packages, setPackages] = useState(initialPackages);
    const [shippingCost, setShippingCost] = useState(60); // Default Inside Dhaka ৳60
    const [formData, setFormData] = useState({
        name: "",
        address: "",
        phone: "",
        notes: ""
    });

    // Handle Checkbox Selection
    const handleCheckboxChange = (id) => {
        setPackages(packages.map(pkg => 
            pkg.id === id ? { ...pkg, selected: !pkg.selected } : pkg
        ));
    };

    // Increment Weight
    const incrementQty = (id) => {
        setPackages(packages.map(pkg => 
            pkg.id === id ? { ...pkg, quantity: pkg.quantity + 1 } : pkg
        ));
    };

    // Decrement Weight (Strictly stays above minimum bundle threshold)
    const decrementQty = (id) => {
        setPackages(packages.map(pkg => 
            pkg.id === id && pkg.quantity > pkg.minQty ? { ...pkg, quantity: pkg.quantity - 1 } : pkg
        ));
    };

    // Form inputs handling
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Order Calculations
    const selectedPackages = packages.filter(pkg => pkg.selected);
    const subtotal = selectedPackages.reduce((sum, pkg) => sum + (pkg.pricePerKg * pkg.quantity), 0);
    const grandTotal = subtotal > 0 ? subtotal + shippingCost : 0;

    // Form Submit Action
    const handleSubmitOrder = (e) => {
        e.preventDefault();
        if (!formData.name || !formData.address || !formData.phone) {
            alert("অনুগ্রহ করে তারকাচিহ্নিত (*) ঘরগুলো পূরণ করুন।");
            return;
        }
        if (selectedPackages.length === 0) {
            alert("অনুগ্রহ করে অন্তত একটি আমের প্যাকেজ নির্বাচন করুন।");
            return;
        }
        
        alert(`ধন্যবাদ ${formData.name}! আপনার মোট ৳${grandTotal} টাকার অর্ডারটি সফলভাবে গৃহীত হয়েছে।`);
        console.log("Order Submitted: ", { formData, selectedPackages, shippingCost, grandTotal });
    };

    return (
        <div className="bg-gray-50 text-gray-800 font-sans min-h-screen selection:bg-green-600 selection:text-white">

            {/* Navigation / Brand Header */}
            <header className="bg-white shadow-sm sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <span className="text-3xl">🥭</span>
                        <span className="text-2xl font-black text-green-600 tracking-tight">Pure<span className="text-orange-500">Rajshahi</span></span>
                    </div>
                    <a href="#order" className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-5 py-2.5 rounded-full transition-all duration-200 transform hover:scale-105 shadow-md text-sm md:text-base">
                        অর্ডার করুন
                    </a>
                </div>
            </header>

            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-green-700 via-green-600 to-emerald-800 text-white overflow-hidden py-12 md:py-20 px-4">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_1px]"></div>
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center relative z-10">
                    
                    <div className="text-center md:text-left space-y-6">
                        <span className="inline-block bg-orange-500 text-xs md:text-sm font-bold tracking-wide uppercase px-3 py-1 rounded-full animate-pulse">
                            ১০০% ন্যাচারাল ও কেমিক্যাল মুক্ত
                        </span>
                        <h1 className="text-4xl md:text-6xl font-black leading-tight drop-shadow-sm">
                            সরাসরি রাজশাহীর বাগান থেকে <span className="text-orange-400">ফ্রেশ আম</span> আপনার দরজায়!
                        </h1>
                        <p className="text-emerald-100 text-lg md:text-xl font-medium leading-relaxed max-w-lg">
                            গাছপাকা অতুলনীয় মিষ্টি ও সুস্বাদু আমের আসল স্বাদ নিতে আজই আপনার পছন্দের প্যাকেজটি বুকিং করুন। 
                        </p>
                        <div className="pt-2">
                            <a href="#order" className="inline-block bg-orange-500 hover:bg-orange-600 text-white text-xl md:text-2xl font-extrabold px-10 py-4 rounded-xl shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                                অর্ডার করতে ক্লিক করুন ➔
                            </a>
                        </div>
                    </div>

                    <div className="flex justify-center relative">
                        <div className="absolute inset-0 bg-emerald-500 rounded-full filter blur-3xl opacity-30 w-72 h-72 mx-auto my-auto"></div>
                        <img
                            src="https://i.ibb.co/8x6V4N2/mango.png"
                            alt="Fresh Rajshahi Mangoes"
                            className="w-[350px] max-w-full drop-shadow-2xl relative z-10 transform hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                </div>
            </section>

            {/* Features/Benefits Grid */}
            <section className="max-w-6xl mx-auto px-4 py-16">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 relative inline-block">
                        কেন আমাদের আম সেরা?
                        <span className="absolute bottom-0 left-1/3 right-1/3 h-1 bg-orange-500 rounded"></span>
                    </h2>
                    <p className="text-gray-600">আমরা সরাসরি নিজস্ব তত্ত্বাবধানে বাগান থেকে আম সংগ্রহ করে থাকি, তাই মানে কোনো আপস নেই।</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <div className="bg-white border border-gray-100 shadow-xl shadow-gray-200/50 rounded-2xl p-6 text-center hover:border-green-500 transition-all duration-300">
                        <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">১০০% কেমিক্যাল মুক্ত</h3>
                        <p className="text-gray-600 leading-relaxed">কোনো প্রকার প্রিজারভেটিভ, ফরমালিন বা কার্বাইড ছাড়াই প্রাকৃতিকভাবে পাকানো আম।</p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white border border-gray-100 shadow-xl shadow-gray-200/50 rounded-2xl p-6 text-center hover:border-green-500 transition-all duration-300">
                        <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 text-orange-500">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M16.243 17.657l.707.707M6.343 6.364l.707-.707M12 5a7 7 0 100 14 7 7 0 000-14z" /></svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">বাগান থেকে সরাসরি</h3>
                        <p className="text-gray-600 leading-relaxed">অর্ডার পাওয়ার পর সরাসরি গাছ থেকে পেড়ে প্যাকিং করে পাঠিয়ে দেওয়া হয়।</p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white border border-gray-100 shadow-xl shadow-gray-200/50 rounded-2xl p-6 text-center hover:border-green-500 transition-all duration-300">
                        <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4 text-emerald-600">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">সুপার ফাস্ট ডেলিভারি</h3>
                        <p className="text-gray-600 leading-relaxed">সুরক্ষিত কুরিয়ার সার্ভিসের মাধ্যমে সারা বাংলাদেশে দ্রুত ও নিরাপদ কন্ডিশনে হোম ডেলিভারি।</p>
                    </div>
                </div>
            </section>

            {/* How to Consume section */}
            <section className="bg-green-50 py-12 px-4">
                <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-md p-6 md:p-8 flex flex-col md:flex-row items-center gap-6">
                    <div className="text-4xl">💡</div>
                    <div>
                        <h4 className="text-lg font-bold text-green-700 mb-1">আম খাওয়ার সঠিক নিয়ম:</h4>
                        <p className="text-gray-700 leading-relaxed">
                            কুরিয়ার থেকে আম পাওয়ার পর ঘরের মেঝেতে কিছুক্ষণ ছড়িয়ে রাখুন। খাওয়ার আগে অন্তত ৩০ মিনিট পরিষ্কার ঠাণ্ডা পানিতে ভিজিয়ে রেখে তারপর কেটে সাবাড় করুন সম্পূর্ণ রসালো ও আসল মিষ্টি স্বাদের তৃপ্তি!
                        </p>
                    </div>
                </div>
            </section>

            {/* Order Checkout Section Container */}
            <main id="order" className="max-w-6xl mx-auto px-4 py-16">
                
                <div className="bg-white border border-gray-200 shadow-2xl rounded-3xl overflow-hidden">
                    {/* Checkout Top Bar Banner */}
                    <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white text-center py-6 px-4">
                        <h2 className="text-xl md:text-3xl font-extrabold">
                            অর্ডারটি সম্পূর্ণ করতে নিচে আপনার সঠিক তথ্য দিন
                        </h2>
                        <p className="text-sm text-green-100 mt-1">ক্যাশ অন ডেলিভারিতে কোনো অগ্রিম পেমেন্টের ঝামেলা নেই!</p>
                    </div>

                    <form onSubmit={handleSubmitOrder} className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                        
                        {/* LEFT SIDE: Input Form and Product Picker */}
                        <div className="lg:col-span-7 p-6 md:p-10 border-b lg:border-b-0 lg:border-r border-gray-200 space-y-8">
                            
                            {/* Billing details Form */}
                            <div>
                                <h3 className="text-2xl font-black text-gray-900 mb-6 flex items-center gap-2">
                                    <span className="w-2 h-6 bg-orange-500 rounded-full inline-block"></span>
                                    ১. কাস্টমার ইনফরমেশন
                                </h3>

                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-1">আপনার নাম *</label>
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            placeholder="যেমন: মোঃ আসিফ রহমান"
                                            className="w-full border border-gray-300 bg-gray-50 px-4 py-3.5 rounded-xl outline-none focus:bg-white focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-1">পূর্ণাঙ্গ ঠিকানা *</label>
                                        <input
                                            type="text"
                                            name="address"
                                            required
                                            value={formData.address}
                                            onChange={handleInputChange}
                                            placeholder="বাসা নং, রোড নং, থানা, জেলা উল্লেখ করুন"
                                            className="w-full border border-gray-300 bg-gray-50 px-4 py-3.5 rounded-xl outline-none focus:bg-white focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-1">মোবাইল নাম্বার *</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            required
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            placeholder="১১ ডিজিটের সচল মোবাইল নাম্বার"
                                            className="w-full border border-gray-300 bg-gray-50 px-4 py-3.5 rounded-xl outline-none focus:bg-white focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-1">অর্ডার নোট (ঐচ্ছিক)</label>
                                        <textarea
                                            name="notes"
                                            rows="3"
                                            value={formData.notes}
                                            onChange={handleInputChange}
                                            placeholder="ডেলিভারি ম্যানের উদ্দেশ্যে কোনো বিশেষ নির্দেশনা থাকলে লিখুন..."
                                            className="w-full border border-gray-300 bg-gray-50 px-4 py-3.5 rounded-xl outline-none focus:bg-white focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Product Package Picker */}
                            <div>
                                <h3 className="text-2xl font-black text-gray-900 mb-6 flex items-center gap-2">
                                    <span className="w-2 h-6 bg-orange-500 rounded-full inline-block"></span>
                                    ২. আমের প্যাকেজ নির্বাচন করুন
                                </h3>

                                <div className="space-y-4">
                                    {packages.map((pkg) => (
                                        <div 
                                            key={pkg.id} 
                                            className={`border rounded-2xl p-4 md:p-5 transition-all flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white ${
                                                pkg.selected ? "border-green-500 bg-green-50/30 ring-1 ring-green-500" : "border-gray-200"
                                            }`}
                                        >
                                            {/* Left side info */}
                                            <div className="flex items-start gap-3">
                                                <input 
                                                    type="checkbox" 
                                                    id={`pkg-${pkg.id}`}
                                                    checked={pkg.selected}
                                                    onChange={() => handleCheckboxChange(pkg.id)}
                                                    className="mt-1.5 h-5 w-5 rounded text-green-600 focus:ring-green-500 cursor-pointer"
                                                />
                                                <label htmlFor={`pkg-${pkg.id}`} className="cursor-pointer">
                                                    <p className="font-bold text-gray-900 text-base md:text-lg">{pkg.name}</p>
                                                    <p className="text-sm text-gray-500 font-medium mt-0.5">মূল্য: ৳{pkg.pricePerKg} / কেজি</p>
                                                </label>
                                            </div>

                                            {/* Quantity adjustments */}
                                            {pkg.selected && (
                                                <div className="flex items-center justify-between w-full md:w-auto gap-4 pt-3 md:pt-0 border-t md:border-t-0 border-gray-100">
                                                    <div className="flex items-center border border-gray-300 rounded-xl bg-white overflow-hidden shadow-sm">
                                                        <button 
                                                            type="button"
                                                            onClick={() => decrementQty(pkg.id)}
                                                            className="px-4 py-2 bg-gray-50 hover:bg-gray-100 font-bold text-gray-600 border-r transition"
                                                        >
                                                            -
                                                        </button>
                                                        <span className="px-5 font-bold text-gray-800 text-center min-w-[50px]">
                                                            {pkg.quantity} কেজি
                                                        </span>
                                                        <button 
                                                            type="button"
                                                            onClick={() => incrementQty(pkg.id)}
                                                            className="px-4 py-2 bg-gray-50 hover:bg-gray-100 font-bold text-gray-600 border-l transition"
                                                        >
                                                            +
                                                        </button>
                                                    </div>
                                                    <p className="text-right font-extrabold text-green-600 text-lg md:text-xl min-w-[90px]">
                                                        ৳{pkg.pricePerKg * pkg.quantity}
                                                    </p>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>

                        {/* RIGHT SIDE: Final Order Summary Receipt */}
                        <div className="lg:col-span-5 bg-gray-50/80 p-6 md:p-10 flex flex-col justify-between">
                            
                            <div>
                                <h3 className="text-2xl font-black text-gray-900 mb-6 flex items-center gap-2">
                                    <span className="w-2 h-6 bg-green-600 rounded-full inline-block"></span>
                                    ৩. আপনার অর্ডার সামারি
                                </h3>

                                <div className="bg-white border border-gray-200/80 rounded-2xl p-5 shadow-sm space-y-4">
                                    
                                    {/* Selected Products List */}
                                    <div className="border-b border-gray-100 pb-4 space-y-3">
                                        <div className="flex justify-between font-bold text-gray-500 text-sm tracking-wide">
                                            <span>আইটেম</span>
                                            <span>মূল্য</span>
                                        </div>
                                        
                                        {selectedPackages.length === 0 ? (
                                            <p className="text-red-500 font-medium text-sm py-2">কোনো প্যাক সিলেক্ট করা হয়নি!</p>
                                        ) : (
                                            selectedPackages.map(pkg => (
                                                <div key={pkg.id} className="flex justify-between items-start text-sm md:text-base font-semibold text-gray-800">
                                                    <span className="max-w-[70%]">{pkg.name} <span className="text-orange-500">× {pkg.quantity}KG</span></span>
                                                    <span>৳{pkg.pricePerKg * pkg.quantity}</span>
                                                </div>
                                            ))
                                        )}
                                    </div>

                                    {/* Subtotal */}
                                    <div className="flex justify-between font-bold text-gray-700 text-base border-b border-gray-100 pb-3">
                                        <span>সাবটোটাল</span>
                                        <span>৳{subtotal}</span>
                                    </div>

                                    {/* Shipping Radios */}
                                    <div className="border-b border-gray-100 pb-4">
                                        <span className="block font-bold text-gray-700 text-sm mb-2.5">ডেলিভারি লোকেশন</span>
                                        <div className="space-y-2">
                                            <label className="flex items-center justify-between border border-gray-200 p-3 rounded-xl bg-gray-50/50 cursor-pointer hover:bg-white transition">
                                                <div className="flex items-center gap-2.5">
                                                    <input 
                                                        type="radio" 
                                                        name="shipping" 
                                                        checked={shippingCost === 60} 
                                                        onChange={() => setShippingCost(60)}
                                                        className="h-4 w-4 text-green-600 focus:ring-green-500" 
                                                    />
                                                    <span className="font-semibold text-gray-800 text-sm">ঢাকার ভেতরে</span>
                                                </div>
                                                <span className="font-bold text-gray-700 text-sm">৳৬০</span>
                                            </label>

                                            <label className="flex items-center justify-between border border-gray-200 p-3 rounded-xl bg-gray-50/50 cursor-pointer hover:bg-white transition">
                                                <div className="flex items-center gap-2.5">
                                                    <input 
                                                        type="radio" 
                                                        name="shipping" 
                                                        checked={shippingCost === 120} 
                                                        onChange={() => setShippingCost(120)}
                                                        className="h-4 w-4 text-green-600 focus:ring-green-500" 
                                                    />
                                                    <span className="font-semibold text-gray-800 text-sm">ঢাকার বাইরে</span>
                                                </div>
                                                <span className="font-bold text-gray-700 text-sm">৳১২০</span>
                                            </label>
                                        </div>
                                    </div>

                                    {/* Grand Total */}
                                    <div className="flex justify-between items-center text-xl md:text-2xl font-black text-gray-900 pt-2">
                                        <span>সর্বমোট প্রদেয়</span>
                                        <span className="text-green-600">৳{grandTotal}</span>
                                    </div>

                                </div>

                                {/* COD Badge */}
                                <div className="mt-5 border border-dashed border-orange-300 rounded-2xl p-4 bg-orange-50/40 flex items-start gap-3">
                                    <span className="text-xl">🤝</span>
                                    <div>
                                        <h4 className="font-bold text-orange-800 text-sm">ক্যাশ অন ডেলিভারি (COD)</h4>
                                        <p className="text-xs text-orange-700/90 mt-0.5">পণ্য হাতে পেয়ে যাচাই করে তারপর ডেলিভারি ম্যানকে টাকা পরিশোধ করবেন।</p>
                                    </div>
                                </div>
                            </div>

                            {/* Submit Button */}
                            <div className="mt-8 lg:mt-0">
                                <button
                                    type="submit"
                                    className="w-full bg-orange-500 hover:bg-orange-600 text-white font-black text-xl py-4 rounded-xl shadow-xl shadow-orange-500/20 active:scale-[0.99] transition-all"
                                >
                                    অর্ডার নিশ্চিত করুন ৳{grandTotal}
                                </button>
                                <p className="text-center text-xs text-gray-400 mt-3">
                                    নিরাপদ ও নির্ভরযোগ্য ই-কমার্স সেবার প্রতিশ্রুতি।
                                </p>
                            </div>

                        </div>

                    </form>

                </div>

            </main>

            {/* Premium Minimalistic Footer */}
            <footer className="bg-gray-900 text-gray-400 text-center py-8 px-4 border-t border-gray-800">
                <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
                    <p>© ২০২৬ PureRajshahi. সর্বস্বত্ব সংরক্ষিত।</p>
                    <p className="text-gray-500">Design & Developed By UniquExpressBD</p>
                </div>
            </footer>

        </div>
    );
};

export default MangoLandingPage;