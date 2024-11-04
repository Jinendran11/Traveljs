import React from 'react';
import { FaWhatsapp, FaFacebookF, FaInstagram, FaViber, FaEnvelope,  } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white mt-10 py-8">
      <div className="container mx-auto flex flex-col items-center space-y-6 text-center">
  
        <h1 className="text-2xl font-bold">Traveljs Pvt. Ltd</h1>

        <p className="text-lg">
          WhatsApp / Viber: <a href="tel:+94752460498" className="text-green-500">+94 752460498</a>
        </p>
        <hr className="w-[1200px] border-t-2 border-gray-300 my-4" />

        <div className="flex space-x-8 text-2xl">                                      {/* Social Icons */}
          <a href="https://wa.me/94752460498" className="hover:text-green-500">
            <FaWhatsapp />
          </a>
          <a href="https://facebook.com" className="hover:text-blue-600">
            <FaFacebookF />
          </a>
          <a href="https://instagram.com" className="hover:text-pink-500">
            <FaInstagram />
          </a>
          <a href="viber://chat?number=94752460498" className="hover:text-purple-500">
            <FaViber />
          </a>
          <a href="mailto:info@traveljs.com" className="hover:text-red-500">
            <FaEnvelope />
          </a>
        </div>

        <div className="flex space-x-6 text-lg mt-4">                                {/* Navigation Links */}
          <a href="/" className="hover:underline">Home</a>
          <a href="/services" className="hover:underline">Service</a>
          <a href="/about" className="hover:underline">About Us</a>
          <a href="/contact" className="hover:underline">Contact Us</a>
        </div>

        
        <div className="text-sm mt-6">
          <p>
            &copy; {new Date().getFullYear()} Traveljs Pvt. Ltd. ALL RIGHTS RESERVED
          </p>
          <p>Website Designed & Developed by: M.Jinendran </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
