import React, { useState } from "react";
import axios from "axios"; // ⚡ এই লাইনটি ফাইলের একদম উপরে যুক্ত করুন
const MangoLandingPage = () => {
    // Packages Data
    const initialPackages = [
        {
            id: 1,
            name: "রেগুলার ম্যাঙ্গো প্যাক (হিমসাগর + ল্যাংড়া)",
            pricePerKg: 150,
            quantity: 12,
            selected: true,
            minQty: 5
        },
        {
            id: 2,
            name: "প্রিমিয়াম ফ্যামিলি প্যাক (হিমসাগর + ফজলি)",
            pricePerKg: 180,
            quantity: 12,
            selected: false,
            minQty: 5
        },
        {
            id: 3,
            name: "মেগা ফিস্ট উৎসব প্যাক (মিক্সড প্রিমিয়াম আম)",
            pricePerKg: 220,
            quantity: 12,
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
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false); // সাবমিশন লোডিং স্টেট

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

    // ========================================================
    // BACKEND API INTEGRATION (Form Submit Action)
    // ========================================================
    const handleSubmitOrder = async (e) => {
        e.preventDefault();

        // প্রাইমারি ভ্যালিডেশন চেক
        if (!formData.name || !formData.address || !formData.phone) {
            alert("অনুগ্রহ করে তারকাচিহ্নিত (*) ঘরগুলো পূরণ করুন।");
            return;
        }
        if (selectedPackages.length === 0) {
            alert("অনুগ্রহ করে অন্তত একটি আমের প্যাকেজ নির্বাচন করুন।");
            return;
        }

        setIsSubmitting(true);

        // ব্যাকএন্ড মডেলের রিকোয়েস্ট বডি বা পেলোড ফরম্যাট
        const orderPayload = {
            name: formData.name,
            address: formData.address,
            phone: formData.phone,
            notes: formData.notes,
            // একাধিক প্যাক সিলেক্ট করলে সবগুলোকে ব্যাকএন্ডে অ্যারে আকারে পাঠানো হচ্ছে
            items: selectedPackages.map(pkg => ({
                name: pkg.name,
                quantity: pkg.quantity,
                price: pkg.pricePerKg * pkg.quantity
            })),
            shippingCost: shippingCost,
            grandTotal: grandTotal
            // নোট: id, status, date ব্যাকএন্ডে মঙ্গুস স্কিমা থেকে অটো জেনারেট হবে।
        };

        try {
           
            
            // Axios.post সরাসরি URL এবং পেলোড অবজেক্ট ইনপুট নেয়
            const response = await axios.post("https://uxbd.vercel.app/api/orders", orderPayload);

            // Axios-এর রেসপন্স ডাটা সরাসরি .data প্রপার্টিতে থাকে
            const result = response.data;

            if (result.success) {
                // সফল হলে সাকসেস মোডাল পপ-আপ ট্রিগার হবে
                setShowSuccessModal(true);
            } else {
                alert(result.message || "অর্ডার প্রসেস করতে সমস্যা হয়েছে। আবার চেষ্টা করুন।");
            }
        } catch (error) {
            console.error("API Error Response:", error);
            // Axios-এর সার্ভার সাইড এরর মেসেজ ধরার জন্য error.response?.data?.message ব্যবহার করা ভালো
            const errMsg = error.response?.data?.message || "সার্ভার কানেকশন এরর! অনুগ্রহ করে ব্যাকএন্ড রান আছে কিনা চেক করুন।";
            alert(errMsg);
        } finally {
            setIsSubmitting(false);
        }
    };
const handleCloseModal = () => {

    setShowSuccessModal(false);

    // Reset Form
    setFormData({
        name: "",
        address: "",
        phone: "",
        notes: ""
    });

    // Reset Packages
    setPackages(initialPackages);

    // Reset Shipping
    setShippingCost(60);

    // Scroll To Top
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};
  

    const sliderImages = [
        { id: 1, src: "https://scontent.fdac110-1.fna.fbcdn.net/v/t39.30808-6/305219786_430802175823626_6234519217026664526_n.png?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=8cKPzORpMM4Q7kNvwH4sZQW&_nc_oc=AdrT2XTUG66WmtXsUt7IhcPka4wPdZbWaXDA2C6UEzPbIZlUZLTFeVKSwdSMBBHJ864&_nc_zt=23&_nc_ht=scontent.fdac110-1.fna&_nc_gid=-K9gw8IJNQVTglllaxcu-A&_nc_ss=7b2a8&oh=00_Af6qZ8EpRnsKXtQ8r4Ku5Jg0IH_pEClPmX-xfyVQVEBMPA&oe=6A15C2D4", alt: "Fresh Rajshahi Mangoes 1" },
        { id: 2, src: "https://myzoo.asia/public/uploads/all/OyH3JHeH7wzttc5z2UuYTnAwENmzvVTYPfG0Dcab.png", alt: "Fresh Rajshahi Mangoes 2" },
        { id: 3, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZVE3pk10kuMT7BKwvOW38YCux-9QDnPwwSA&s", alt: "Fresh Rajshahi Mangoes 3" },
        { id: 4, src: "https://service.bdassistant.com/uploads/krjvexvkyr567.jpeg", alt: "Fresh Rajshahi Mangoes 4" },
        { id: 5, src: "https://giftall.s3.amazonaws.com/uploads/images/product/product_1591113109.jpg", alt: "Fresh Rajshahi Mangoes 5" }
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    // অটোমেটিক ৩ সেকেন্ড পর পর স্লাইড চেঞ্জ হওয়ার জন্য useEffect
    React.useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % sliderImages.length);
        }, 3000);
        return () => clearInterval(timer);
    }, [sliderImages.length]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + sliderImages.length) % sliderImages.length);
    };

    return (
        <div className="bg-gray-50 text-gray-800 font-sans min-h-screen selection:bg-green-600 selection:text-white relative">

            {/* Navigation / Brand Header */}
            <header className="bg-white shadow-sm sticky top-0 z-40">
                <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <span className="md:text-3xl text-2xl">🥭</span>
                        <span className="md:text-2xl text-xl font-black text-green-600 tracking-tight">Unique<span className="text-orange-500">ExpressBD</span></span>
                    </div>
                    <a href="#order" className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-4 py-2 rounded-full transition-all duration-200 transform hover:scale-105 shadow-md text-[14px] md:text-base">
                        অর্ডার করুন
                    </a>
                </div>
            </header>

            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-green-700 via-green-600 to-emerald-800 text-white overflow-hidden py-12 md:py-20 px-4">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_1px]"></div>
                <div className="max-w-6xl md:px-5  mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 items-center relative z-10">

                    <div className="text-center md:text-left space-y-6">
                        <span className="inline-block bg-orange-500 text-xs md:text-sm font-bold tracking-wide uppercase px-3 py-1 rounded-full animate-pulse">
                            ১০০% ন্যাচারাল ও কেমিক্যাল মুক্ত
                        </span>
                        <h1 className="text-4xl md:text-6xl font-black leading-tight drop-shadow-sm">
                            সরাসরি রাজশাহীর বাগান থেকে <span className="text-orange-400">ফ্রেশ আম</span> আপনার দরজায়!
                        </h1>
                        <p className="text-emerald-100 text-md md:text-xl font-medium leading-relaxed max-w-lg">
                            গাছপাকা অতুলনীয় মিষ্টি ও সুস্বাদু আমের আসল স্বাদ নিতে আজই আপনার পছন্দের প্যাকেজটি বুকিং করুন।
                        </p>
                        <div className="pt-2">
                            <a href="#order" className="inline-block bg-orange-500 hover:bg-orange-600 text-white text-lg md:text-2xl font-extrabold px-10 md:py-4 py-2.5 rounded-xl shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                                অর্ডার করতে ক্লিক করুন ➔
                            </a>
                        </div>
                    </div>

                    <div className="flex md:pl-5 justify-center relative group w-full max-w-[350px] mx-auto">
                        <div className="absolute inset-0 bg-emerald-500 rounded-full filter blur-3xl opacity-30 w-72 h-72 mx-auto my-auto"></div>

                        <div className="relative z-10 w-full overflow-hidden min-h-[250px] md:min-h-[350px] flex items-center justify-center">
                            {sliderImages.map((image, index) => (
                                <div
                                    key={image.id}
                                    className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ease-in-out transform ${index === currentSlide
                                        ? "opacity-100 scale-100 translate-x-0"
                                        : "opacity-0 scale-95 pointer-events-none"
                                        }`}
                                >
                                    <img
                                        src={image.src}
                                        alt={image.alt}
                                        className="w-[350px] max-w-full drop-shadow-2xl object-contain transform hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            ))}
                        </div>

                        <button
                            type="button"
                            onClick={prevSlide}
                            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full md:opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        <button
                            type="button"
                            onClick={nextSlide}
                            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full md:opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>

                        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                            {sliderImages.map((_, index) => (
                                <button
                                    key={index}
                                    type="button"
                                    onClick={() => setCurrentSlide(index)}
                                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${index === currentSlide ? "bg-orange-500 w-6" : "bg-white/50"
                                        }`}
                                />
                            ))}
                        </div>
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
                    <div className="bg-white border border-gray-100 shadow-xl shadow-gray-200/50 rounded-2xl p-6 text-center hover:border-green-500 transition-all duration-300">
                        <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">১০০% কেমিক্যাল মুক্ত</h3>
                        <p className="text-gray-600 leading-relaxed">কোনো প্রকার প্রিজারভেটিভ, ফরমালিন বা কার্বাইড ছাড়াই প্রাকৃতিকভাবে পাকানো আম।</p>
                    </div>

                    <div className="bg-white border border-gray-100 shadow-xl shadow-gray-200/50 rounded-2xl p-6 text-center hover:border-green-500 transition-all duration-300">
                        <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 text-orange-500">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M16.243 17.657l.707.707M6.343 6.364l.707-.707M12 5a7 7 0 100 14 7 7 0 000-14z" /></svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">বাগান থেকে সরাসরি</h3>
                        <p className="text-gray-600 leading-relaxed">অর্ডার পাওয়ার পর সরাসরি গাছ থেকে পেড়ে প্যাকিং করে পাঠিয়ে দেওয়া হয়।</p>
                    </div>

                    <div className="bg-white border border-gray-100 shadow-xl shadow-gray-200/50 rounded-2xl p-6 text-center hover:border-green-500 transition-all duration-300">
                        <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4 text-emerald-600">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">সুপার ফাস্ট ডেলিভারি</h3>
                        <p className="text-gray-600 leading-relaxed">সুরক্ষিত কুরিয়ার সার্ভিসের মাধ্যমে সারা বাংলাদেশে দ্রুত ও নিরাপদ কন্ডিশনে হোম ডেলিভারি।</p>
                    </div>
                </div>
            </section>

            {/* How to Consume section */}
            <section className="bg-green-50 py-12 px-4">
                <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-md p-6 md:p-8 flex flex-col md:flex-row items-center gap-6">
                    <div className="text-4xl">💡</div>
                    <div>
                        <h4 className="text-lg font-bold text-green-700 mb-1">আম খাওয়ার সঠিক নিয়ম:</h4>
                        <p className="text-gray-700 leading-relaxed">
                            কুরিয়ার থেকে আম পাওয়ার পর ঘরের মেঝেতে কিছুক্ষণ ছড়িয়ে রাখুন। খাওয়ার আগে অন্তত ৩০ মিনিট পরিষ্কার ঠাণ্ডা পানিতে ভিজিয়ে রেখে তারপর কেটে সাবাড় করুন সম্পূর্ণ রসালো ও আসল মিষ্টি স্বাদের তৃপ্তি!
                        </p>
                    </div>
                </div>
            </section>

            {/* Order Checkout Section Container */}
            <main id="order" className="max-w-6xl mx-auto px-4 py-10">

                <div className="bg-white border border-gray-200 shadow-2xl rounded-3xl overflow-hidden">
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
                                <h3 className="md:text-2xl text-xl font-black text-gray-900 mb-6 flex items-center gap-2">
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
                                            className="w-full border border-gray-300 bg-gray-50 px-4 py-2.5 rounded-xl outline-none focus:bg-white focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
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
                                            className="w-full border border-gray-300 bg-gray-50 px-4 py-2.5 rounded-xl outline-none focus:bg-white focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
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
                                            className="w-full border border-gray-300 bg-gray-50 px-4 py-2.5 rounded-xl outline-none focus:bg-white focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
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
                                <h3 className="md:text-2xl text-xl font-black text-gray-900 mb-6 flex items-center gap-2">
                                    <span className="w-2 h-6 bg-orange-500 rounded-full inline-block"></span>
                                    ২. আমের প্যাকেজ নির্বাচন করুন
                                </h3>

                                <div className="space-y-4">
                                    {packages.map((pkg) => (
                                        <div
                                            key={pkg.id}
                                            className={`border rounded-2xl p-4 md:p-5 transition-all flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white ${pkg.selected ? "border-green-500 bg-green-50/30 ring-1 ring-green-500" : "border-gray-200"
                                                }`}
                                        >
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
                                <h3 className="md:text-2xl text-xl font-black text-gray-900 mb-6 flex items-center gap-2">
                                    <span className="w-2 h-6 bg-green-600 rounded-full inline-block"></span>
                                    ৩. আপনার অর্ডার সামারি
                                </h3>

                                <div className="bg-white border border-gray-200/80 rounded-2xl p-5 shadow-sm space-y-4">

                                    <div className="border-b border-gray-100 pb-4 space-y-3">
                                        <div className="flex justify-between font-bold text-gray-500 text-sm tracking-wide">
                                            <span>আইটেম</span>
                                            <span>মূল্য</span>
                                        </div>

                                        {selectedPackages.length === 0 ? (
                                            <p className="text-red-500 font-medium text-sm py-2">কোনো প্যাক সিলেক্ট করা হয়নি!</p>
                                        ) : (
                                            selectedPackages.map(pkg => (
                                                <div key={pkg.id} className="flex justify-between items-start text-sm md:text-base font-semibold text-gray-800">
                                                    <span className="max-w-[70%]">{pkg.name} <span className="text-orange-500">× {pkg.quantity}KG</span></span>
                                                    <span>৳{pkg.pricePerKg * pkg.quantity}</span>
                                                </div>
                                            ))
                                        )}
                                    </div>

                                    <div className="flex justify-between font-bold text-gray-700 text-base border-b border-gray-100 pb-3">
                                        <span>সাবটোটাল</span>
                                        <span>৳{subtotal}</span>
                                    </div>

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

                                    <div className="flex justify-between items-center text-xl md:text-2xl font-black text-gray-900 pt-2">
                                        <span>সর্বমোট প্রদেয়</span>
                                        <span className="text-green-600">৳{grandTotal}</span>
                                    </div>

                                </div>

                                <div className="mt-5 border border-dashed border-orange-300 rounded-2xl p-4 bg-orange-50/40 flex items-start gap-3">
                                    <span className="text-xl">🤝</span>
                                    <div>
                                        <h4 className="font-bold text-orange-800 text-sm">ক্যাশ অন ডেলিভারি (COD)</h4>
                                        <p className="text-xs text-orange-700/90 mt-0.5">পণ্য হাতে পেয়ে যাচাই করে তারপর ডেলিভারি ম্যানকে টাকা পরিশোধ করবেন।</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 lg:mt-0">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`w-full bg-orange-500 hover:bg-orange-600 text-white font-black md:text-xl text-lg py-4 rounded-xl shadow-xl shadow-orange-500/20 active:scale-[0.99] transition-all flex items-center justify-center gap-2 ${isSubmitting ? "opacity-75 cursor-not-allowed" : ""}`}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            অর্ডার প্রসেস হচ্ছে...
                                        </>
                                    ) : (
                                        `অর্ডার নিশ্চিত করুন ৳${grandTotal}`
                                    )}
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
            <footer className="bg-gray-900 text-gray-400 text-center md:py-8 py-4 px-4 border-t border-gray-800">
                <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center md:gap-4 gap-2 text-sm">
                    <p>© ২০২৬ UniquexpressBD. সর্বস্বত্ব সংরক্ষিত।</p>
                    <p className="text-gray-500 text-center">
                        Design & Developed By{" "}
                        <a
                            href="https://mostakinahmed.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 font-semibold hover:text-blue-800 underline tracking-wider"
                        >
                            Mostakin Ahmed
                        </a>
                    </p>
                </div>
            </footer>

            {/* SUCCESS MODAL POPUP */}
            {showSuccessModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
                    <div className="bg-white rounded-3xl p-6 md:p-8 max-w-md w-full text-center shadow-2xl border border-gray-100 transform scale-100 transition-all duration-300">

                        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5 text-green-600 shadow-inner">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>

                        <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-2">
                            অর্ডারটি সফল হয়েছে!
                        </h3>

                        <p className="text-green-600 font-bold text-lg mb-4">
                            ধন্যবাদ, {formData.name}!
                        </p>

                        <div className="bg-gray-50 rounded-2xl p-4 text-left text-sm space-y-2 text-gray-600 border border-gray-100 mb-6">
                            <p><span className="font-bold text-gray-800">ফোন নাম্বার:</span> {formData.phone}</p>
                            <p><span className="font-bold text-gray-800">ঠিকানা:</span> {formData.address}</p>
                            <p className="pt-2 border-t border-gray-200 flex justify-between font-extrabold text-base text-gray-900">
                                <span>মোট বিল (COD):</span>
                                <span className="text-green-600">৳{grandTotal}</span>
                            </p>
                        </div>

                        <p className="text-gray-500 text-sm leading-relaxed mb-6">
                            আমাদের প্রতিনিধি খুব শীঘ্রই আপনার মোবাইলে কল করে অর্ডারটি কনফার্ম করবেন এবং দ্রুত ডেলিভারির ব্যবস্থা করবেন। অনুগ্রহ করে ফোনটি সচল রাখুন।
                        </p>

                        <button
                            onClick={handleCloseModal}
                            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold text-lg py-3.5 rounded-xl shadow-lg shadow-green-600/20 active:scale-[0.98] transition-all"
                        >
                            ঠিক আছে, ধন্যবাদ
                        </button>
                    </div>
                </div>
            )}

        </div>
    );
};

export default MangoLandingPage;