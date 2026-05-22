import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0F172A] text-gray-300 mt-10">

      {/* TOP */}
      <div className="w-[92%] lg:w-[75%] mx-auto py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* BRAND */}
        <div>
          <h1 className="text-3xl font-extrabold text-white mb-4 tracking-wide">
            পুঁথিকুঞ্জ
          </h1>

          <p className="text-sm leading-7 text-gray-400">
            বাংলাদেশের বিশ্বস্ত অনলাইন বুকস্টোর।
            সেরা বই, দ্রুত ডেলিভারি এবং সহজ কেনাকাটা।
          </p>

          {/* SOCIAL */}
          <div className="flex items-center gap-3 mt-6">
            {[
              { icon: <FaFacebookF />, color: "hover:bg-blue-600" },
              { icon: <FaInstagram />, color: "hover:bg-pink-600" },
              { icon: <FaTwitter />, color: "hover:bg-sky-500" },
              { icon: <FaYoutube />, color: "hover:bg-red-600" },
            ].map((item, i) => (
              <button
                key={i}
                className={`w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-gray-300 ${item.color} hover:text-white transition-all duration-300`}
              >
                {item.icon}
              </button>
            ))}
          </div>
        </div>

        {/* LINKS */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-5">
            Quick Links
          </h2>

          <div className="space-y-3 text-sm">
            {["Home", "Books", "Best Sellers", "Offers"].map((item) => (
              <a
                key={item}
                href="#"
                className="block hover:text-blue-400 transition"
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        {/* CATEGORIES */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-5">
            Categories
          </h2>

          <div className="space-y-3 text-sm">
            {["Programming", "Islamic", "Business", "Story"].map((item) => (
              <a
                key={item}
                href="#"
                className="block hover:text-blue-400 transition"
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        {/* CONTACT */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-5">
            Contact
          </h2>

          <div className="space-y-4 text-sm">

            <div className="flex items-center gap-3">
              <MapPin size={18} className="text-blue-400" />
              <p>Dhaka, Bangladesh</p>
            </div>

            <div className="flex items-center gap-3">
              <Phone size={18} className="text-blue-400" />
              <p>+880 1234-567890</p>
            </div>

            <div className="flex items-center gap-3">
              <Mail size={18} className="text-blue-400" />
              <p>support@puthikunjo.com</p>
            </div>

          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="border-t border-white/10">
        <div className="w-[92%] lg:w-[75%] mx-auto py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-gray-500">

          <p>© 2026 পুঁথিকুঞ্জ. All rights reserved.</p>

          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-white transition">
              Privacy
            </a>

            <a href="#" className="hover:text-white transition">
              Terms
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;