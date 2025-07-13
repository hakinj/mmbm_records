import React from "react";
import { FaInstagram, FaYoutube, FaSpotify } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-black text-white">
   

      {/* Overlay */}
      <div className="relative z-10 flex flex-col items-center w-full justify-center text-center px-4 py-4 space-y-6">
        {/* Logo or Label Name */}
        <h2 className="text-3xl font-bold uppercase tracking-wide">
          MMBM Records
        </h2>

       <div className="flex max-lg:flex-col max-lg:gap-10 items-center w-full justify-around">

 {/* Nav Links */}
 <div className="flex items-center gap-6">
    <p>Privacy Policies</p>
    <p> Terms of Use</p>
 </div>

         {/* Nav Links */}
        <nav className="flex space-x-16 max-lg:space-x-10 text-md uppercase font-bold">
          <a href="#" className="hover:text-orange-400 transition">
            Home
          </a>
          <a href="#" className="hover:text-orange-400 transition">
            Artists
          </a>
          <a href="#" className="hover:text-orange-400 transition">
            Releases
          </a>
          <a href="#" className="hover:text-orange-400 transition">
            Contact
          </a>
        </nav>

        {/* Social Icons */}
        <div className="flex space-x-10">
          <a
            href="#"
            aria-label="Instagram"
            className="hover:text-orange-400 transition"
          >
            <FaInstagram size={30} />
          </a>
          <a
            href="#"
            aria-label="YouTube"
            className="hover:text-orange-400 transition"
          >
            <FaYoutube size={30} />
          </a>
          <a
            href="#"
            aria-label="Spotify"
            className="hover:text-orange-400 transition"
          >
            <FaSpotify size={30} />
          </a>
        </div>

       </div>

        {/* Copyright */}
        <p className="text-md opacity-80">
          © {new Date().getFullYear()} MMBM Records. All rights reserved.
        </p>
      </div>
    </footer>
  );
}