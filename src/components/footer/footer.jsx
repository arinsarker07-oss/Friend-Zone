import React from 'react';
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebookF, FaXTwitter } from "react-icons/fa6";
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-[#244D3F] text-white py-16 px-6 font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        <h2 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">
          KeenKeeper
        </h2>
        <p className="text-white opacity-80 text-sm md:text-base max-w-2xl mb-10 leading-relaxed">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>

        <div className="mb-10">
          <h3 className="text-sm tracking-[0.2em] font-semibold mb-6 opacity-80">
            Social Links
          </h3>
          <div className="flex justify-center gap-5">
            <a href="#" className="bg-white w-10 h-10 flex items-center justify-center rounded-full text-[#1a4332] hover:bg-gray-200 transition-all">
              <RiInstagramFill size={20} />
            </a>
            <Link href="https://web.facebook.com/arin57276" className="bg-white w-10 h-10 flex items-center justify-center rounded-full text-[#1a4332] hover:bg-gray-200 transition-all">
              <FaFacebookF size={18} />
            </Link>
            <a href="#" className="bg-white w-10 h-10 flex items-center justify-center rounded-full text-[#1a4332] hover:bg-gray-200 transition-all">
              <FaXTwitter size={18} />
            </a>
          </div>
        </div>

        <div className="w-full pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-[11px] md:text-xs text-gray-400 gap-4">
          <p>© 2026 KeenKeeper. All rights reserved.</p>
          <div className="flex gap-6 md:gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;