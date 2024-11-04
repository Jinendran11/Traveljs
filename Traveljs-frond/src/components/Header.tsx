import React, { useState } from 'react';
import { FaBars, FaGlobe, FaQuestionCircle } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white shadow-md w-full fixed top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">                                   {/* Logo on the Left */}
            <img src="/logo.png" alt="Logo" className="h-10 w-auto" />
          </div>

          {/* Desktop Navigation (Aligned to the right corner) */}
          <div className="hidden md:flex items-center space-x-8 ml-auto">
            <a href="C:\Users\jinendran\Desktop\uki mjinea\Traveljs project\Traveljs-frond\src\components\Home.tsx" className="text-gray-700 hover:text-green-500">Home</a>
            <a href="C:\Users\jinendran\Desktop\uki mjinea\Traveljs project\Traveljs-frond\src\components\AboutUs.tsx" className="text-gray-700 hover:text-green-500">About Us</a>
            <a href="/contact" className="text-gray-700 hover:text-green-500">Contact Us</a>
            <a href="/service" className="text-gray-700 hover:text-green-500">Service</a>
          </div>

          <div className="hidden md:flex items-center space-x-6 pl-8">
            <FaGlobe className="text-gray-700 hover:text-green-500 cursor-pointer" size={20} />
            <FaQuestionCircle className="text-gray-700 hover:text-green-500 cursor-pointer" size={20} />
            <a 
              href="/signup" 
              className="bg-[#DCC818] text-black px-4 py-2 rounded-md hover:bg-yellow-600"
            >
              Sign Up
            </a>
          </div>

          {/* Menu for Mobile */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-700 hover:text-green-500 focus:outline-none">
              <FaBars size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <a href="/" className="block px-4 py-2 text-gray-700 hover:bg-green-100">Home</a>
          <a href="/about" className="block px-4 py-2 text-gray-700 hover:bg-green-100">About Us</a>
          <a href="/contact" className="block px-4 py-2 text-gray-700 hover:bg-green-100">Contact Us</a>
          <a href="/service" className="block px-4 py-2 text-gray-700 hover:bg-green-100">Service</a>
          <div className="flex items-center justify-between px-4 py-2">
            <FaGlobe className="text-gray-700 hover:text-green-500 cursor-pointer" size={20} />
            <FaQuestionCircle className="text-gray-700 hover:text-green-500 cursor-pointer" size={20} />
            <a 
              href="/signup" 
              className="bg-black-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
            >
              Sign Up
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;



// import React, {useState } from 'react';
// import { FaBars, FaGlobe, FaQuestionCircle } from 'react-icons/fa';

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };
  
//   return (
//     <header className="bg-white shadow-md w-full fixed top-0 z-10">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           {/* Logo on the Left */}
//           <div className="flex-shrink-0">
//             <img src="\logo.jpg" alt="Logo" className="h-10 w-auto" />
//           </div>

//           {/* Desktop Navigation (Aligned to the right corner) */}
//           <div className="hidden md:flex items-center space-x-8 ml-auto">
//             <a href="/" className="text-gray-700 hover:text-green-500">Home</a>
//             <a href="/about" className="text-gray-700 hover:text-green-500">About Us</a>
//             <a href="/contact" className="text-gray-700 hover:text-green-500">Contact Us</a>
//             <a href="/service" className="text-gray-700 hover:text-green-500">Service</a>
//           </div>

//           {/* Icons and Sign-Up Button */}
//           <div className="hidden md:flex items-center space-x-6 pl-8">
//             <FaGlobe className="text-gray-700 hover:text-green-500 cursor-pointer" size={20} />
//             <FaQuestionCircle className="text-gray-700 hover:text-green-500 cursor-pointer" size={20} />
//             <a 
//               href="/signup" 
//               className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
//             >
//               Sign Up
//             </a>
//           </div>

//           {/* Hamburger Menu for Mobile */}
//           <div className="md:hidden">
//             <button onClick={toggleMenu} className="text-gray-700 hover:text-green-500 focus:outline-none">
//               <FaBars size={24} />
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden bg-white shadow-lg">
//           <a href="/" className="block px-4 py-2 text-gray-700 hover:bg-green-100">Home</a>
//           <a href="/about" className="block px-4 py-2 text-gray-700 hover:bg-green-100">About Us</a>
//           <a href="/contact" className="block px-4 py-2 text-gray-700 hover:bg-green-100">Contact Us</a>
//           <a href="/service" className="block px-4 py-2 text-gray-700 hover:bg-green-100">Service</a>
//           <div className="flex items-center justify-between px-4 py-2">
//             <FaGlobe className="text-gray-700 hover:text-green-500 cursor-pointer" size={20} />
//             <FaQuestionCircle className="text-gray-700 hover:text-green-500 cursor-pointer" size={20} />
//             <a 
//               href="/signup" 
//               className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
//             >
//               Sign Up
//             </a>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// };


// export default Header;