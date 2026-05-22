import { useEffect, useState } from "react";
import {
  Headphones,
  Search,
  ShoppingCart,
  User,
  ChevronDown,
  Smartphone,
  Menu,
  X,
  Zap
} from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    const handleScroll = () => setSticky(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const topLinks = ["অর্ডার ট্র্যাক করুন", "ডাউনলোড", "রিভিউ এবং পুরস্কার", "বই হোলসেল"];
  const categoryLinks = [
    { name: "লেখক", hasDropdown: true }, { name: "বিষয়", hasDropdown: true },
    { name: "প্রকাশনী", hasDropdown: true }, { name: "বইমেলা ২০২৬", hasDropdown: false },
    { name: "একাডেমিক বই", hasDropdown: false }, { name: "ই-বুক", hasDropdown: false }
  ];
  const middleLinks = ["বই", "ইলেক্ট্রনিক্স", "সুপার স্টোর", "কিডস জোন", "প্রাতিষ্ঠানিক অর্ডার", "Just for you ✨"];

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300">
        {/* MOBILE SIDEBAR */}
        <div className={`fixed inset-0 z-[1000] lg:hidden transition-all duration-300 ${mobileMenu ? "visible opacity-100" : "invisible opacity-0"}`}>
          <div onClick={() => setMobileMenu(false)} className="absolute inset-0 bg-black/50" />
          <div className={`absolute left-0 top-0 h-full w-[70%] max-w-[300px] bg-white transition-transform duration-300 ${mobileMenu ? "translate-x-0" : "-translate-x-full"}`}>
            <div className="flex items-center justify-between px-5 py-4 border-b border-blue-400">
              <h1 className="text-2xl font-bold text-blue-600">পুঁথিকুঞ্জ</h1>
              <button onClick={() => setMobileMenu(false)}><X size={26} /></button>
            </div>
            <div className="p-5 space-y-6 overflow-y-auto h-full">
              <div className="space-y-4">
                {middleLinks.map(link => <a key={link} href="#" className="block text-gray-700 font-medium">{link}</a>)}
              </div>
            </div>
          </div>
        </div>

        {/* 1. TOP BAR (Desktop) */}
        <div className={`hidden lg:block w-full bg-gray-800 text-white transition-transform duration-300 ${sticky ? "-translate-y-full" : "translate-y-0"}`}>
          <div className="w-[75%] mx-auto h-10 flex items-center justify-between px-4 text-sm">
            <div className="flex items-center gap-2"><Headphones size={14} /> Hotline: 16297</div>
            <div className="flex items-center gap-5 text-gray-300">
              {topLinks.map(item => <a key={item} href="#" className="hover:text-white">{item}</a>)}
            </div>
          </div>
        </div>

        {/* 2. MIDDLE BAR */}
        <div className="w-full bg-white shadow-md transition-all duration-300 "
          style={{ transform: (sticky && !isMobile) ? `translateY(-40px)` : `translateY(0px)` }}>
          <div className="w-[95%] lg:w-[75%] mx-auto px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button className="lg:hidden" onClick={() => setMobileMenu(true)}><Menu size={28} /></button>
              <Link to="/"><h1 className="text-2xl lg:text-4xl font-bold text-blue-600">পুঁথিকুঞ্জ</h1></Link>
            </div>
            <div className="hidden md:flex flex-1 max-w-2xl mx-8 relative">
              <input type="text" placeholder="Search books..." className="w-full border border-blue-400 rounded-full px-6 py-2 outline-none focus:ring-2 ring-blue-100" />
              <button className="absolute right-1 top-1/2 -translate-y-1/2 h-[85%] px-6 bg-blue-500 text-white rounded-full"><Search size={18} /></button>
            </div>
            {/* LIVE OFFER BUTTON */}
            <button className="hidden md:block group relative overflow-hidden px-5 py-2 rounded-full bg-gradient-to-r from-red-500 via-pink-500 to-orange-500 text-white text-xs font-bold shadow-lg hover:shadow-red-300/50 transition-all duration-300 hover:scale-105">

              {/* glowing background */}
              <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* pulse dot */}
              <span className="relative flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
                </span>

                LIVE OFFER
              </span>
            </button>
            <div className="flex items-center gap-5">
              <User size={22} className="text-gray-600" />
              <button className="relative">
                <ShoppingCart size={24} />
                <span className="absolute -top-2 -right-2 h-5 w-5 bg-blue-600 text-white text-[10px] rounded-full flex items-center justify-center">2</span>
              </button>
            </div>
          </div>


        </div>

        {/* 3. SINGLE ROW SECTION (Desktop) */}
        <div
          className={`hidden lg:block sticky top-0 z-40 backdrop-blur-xl bg-white border-t border-blue-400 shadow-sm transition-all duration-500 overflow-hidden ${sticky
              ? "max-h-0 opacity-0 -translate-y-10"
              : "max-h-20 opacity-100 translate-y-0"
            }`}
        >
          <div className="w-[75%] mx-auto h-13">
            <div className="flex items-center justify-between h-full px-6 bg-gradient-to-r from-white via-slate-50 to-white  shadow-[0_4px_20px_rgba(0,0,0,0.04)]">

              {/* LEFT LINKS */}
              <div className="flex items-center gap-8 overflow-x-auto no-scrollbar whitespace-nowrap">

                <div className="flex items-center gap-6 border-r border-gray-200 pr-8">
                  {middleLinks.map((item) => (
                    <a
                      key={item}
                      href="#"
                      className={`relative text-[15px] font-medium tracking-wide transition-all duration-300 group ${item.includes("Just")
                          ? "text-blue-600"
                          : "text-gray-700 hover:text-blue-600"
                        }`}
                    >
                      {item}

                      {/* underline animation */}
                      <span
                        className={`absolute left-0 -bottom-1 h-[2px] rounded-full bg-blue-600 transition-all duration-300 ${item.includes("Just")
                            ? "w-full"
                            : "w-0 group-hover:w-full"
                          }`}
                      />
                    </a>
                  ))}
                </div>

                {/* CATEGORY LINKS */}
                <div className="flex items-center gap-2">
                  {categoryLinks.map((item) => (
                    <button
                      key={item.name}
                      className="group flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300"
                    >
                      <span>{item.name}</span>

                      {item.hasDropdown && (
                        <ChevronDown
                          size={14}
                          className="transition-transform duration-300 group-hover:rotate-180"
                        />
                      )}
                    </button>
                  ))}
                </div>

              </div>
            </div>
          </div>
        </div>



      </header>
      <div className="h-[70px] lg:h-[110px]" />
    </>
  );
};

export default Navbar;