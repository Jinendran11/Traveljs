import React from "react";
import { FaWhatsapp, FaTelegramPlane, FaViber, FaFacebookMessenger } from "react-icons/fa";

const ContactUs: React.FC = () => {
  return (
    <section className=" w-full mx-auto bg-white">
      <h2 className="text-4xl w-full font-bold text-center text-white mb-8 p-4 bg-[#89B552]">
        Contact Us
      </h2>
      <div className=" relative w-[1220px] mx-auto flex flex-col md:flex-row gap-6 items-start justify-between">
    
        <div className="w-full md:w-1/2 h-auto text-left">
          <h3 className="text-2xl font-semibold mb-4 text-green-900">Why we</h3>
          <p className="mb-4 text-gray-700">
            Explore nature and travel freely with our <span className="font-semibold">bike rental services</span>. Whether you want to cycle to nearby attractions or explore new destinations at your own pace, our bikes are available for rent to make your journey memorable.
          </p>
          <p className="mb-4 text-gray-700">
            We also provide <span className="font-semibold">comfortable accommodations</span> tailored for solo travelers, students, and adventurers. Relax after a long day of travel with our partner stays that blend comfort and affordability.
          </p>
        </div>

        <div className="w-full md:w-1/2 h-64 bg  rounded-lg flex items-center justify-center"            /* Right: Image Section */
         style={{ backgroundImage: "url('C:\Users\jinendran\Downloads\home section BG.png')" }}>
          <p className="text-gray-500"></p>
        </div>
      </div>

      

      
        <div className="relative w-[1220px] mx-auto flex flex-col md:flex-row items-center justify-around mt-8 bg-gray-100 p-6 rounded-lg">
        <div className="flex flex-col items-center gap-2">
            <h3 className="text-lg font-bold mb-2">Call Now</h3>                     {/* Call Now Section */}
            <div className="flex flex-col items-center gap-2">
            <span className="text-2xl">📞 +94 752460498 </span>
            </div>
        </div>

        <div className="flex flex-col items-center gap-2">                           {/* Email Section */}
          <h3 className="text-lg font-bold mb-2 ">Send an Email</h3>
          <div className="flex flex-col items-center gap-2">
          <span className="text-2xl">✉️ Traveljs99@gmail.com</span>
        </div>
        </div>

        <div className="flex flex-col items-center gap-2">                           {/* Chat with Us Section */}
          <h3 className="text-lg font-bold mb-2">Chat with Us</h3>
          <div className="flex items-center gap-2">
          <a href="#" className="text-green-500 text-3xl">
            <FaWhatsapp />
          </a>
          <a href="#" className="text-blue-400 text-3xl">
            <FaTelegramPlane />
          </a>
          <a href="#" className="text-purple-600 text-3xl">
            <FaViber />
          </a>
          <a href="#" className="text-blue-600 text-3xl">
            <FaFacebookMessenger />
          </a>
        </div>
        </div>
      </div>

      <form className="relative w-[1220px] mx-auto  mt-10 space-y-4">                      {/* Form Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Your name*"
            className="p-3 border rounded-lg w-full"
            required
          />
          <input
            type="email"
            placeholder="Your email*"
            className="p-3 border rounded-lg w-full"
            required
          />
        </div>
        <textarea
          placeholder="Write your message*"
          className="w-full p-3 border rounded-lg h-32"
          required
        ></textarea>
        <button
          type="submit"
          className="w-full md:w-auto bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition"
        >
          SEND MESSAGE
        </button>
        <div className="flex items-center gap-4"></div>
      </form>
    </section>
  );
};

export default ContactUs;
