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

  <div className="max-w-6xl mx-auto px-4 text-center">
    <p>© 2026 Your Store Name. All rights reserved.</p>

    <div className="flex justify-center gap-4 mt-3 text-sm">
      <a href="#">Privacy Policy</a>
      <a href="#">Terms</a>
      <a href="#">Contact</a>
    </div>
  </div>
</footer>
   
  );
};

export default Footer;