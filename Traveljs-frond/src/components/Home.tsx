import React from 'react';
import { FaMapMarkerAlt, FaHotel, FaMotorcycle, FaCalendarAlt, FaArrowRight } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="bg-white h-[450px] flex items-center justify-center mt-8 mb-3 ">
      <div className="relative w-[1200px] h-[300px] bg-cover bg-center rounded-lg shadow-lg"
           style={{ backgroundImage: "url('C:\Users\jinendran\Downloads\home section BG.png')" }}>
        
      
        <div className="absolute inset-0 bg-black bg-opacity-30 rounded-lg"></div>

      
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold text-center">
            Select the perfect place to relax
          </h1>
        </div>
        
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-80 p-4 rounded-full flex space-x-2">         {/* Buttons */}
          <button className="bg-yellow-300 hover:bg-yellow-400 text-black px-4 py-2 rounded-full flex items-center space-x-2">
            <FaMapMarkerAlt /> <span>Location</span>
          </button>
          <button className="bg-yellow-300 hover:bg-yellow-400 text-black px-4 py-2 rounded-full flex items-center space-x-2">
            <FaHotel /> <span>Stays</span>
          </button>
          <button className="bg-yellow-300 hover:bg-yellow-400 text-black px-4 py-2 rounded-full flex items-center space-x-2">
            <FaMotorcycle /> <span>Vehicles</span>
          </button>
          <button className="bg-yellow-300 hover:bg-yellow-400 text-black px-4 py-2 rounded-full flex items-center space-x-2">
            <FaCalendarAlt /> <span>Date</span>
          </button>
          <button className="bg-green-400 hover:bg-green-500 text-white px-4 py-2 rounded-full">
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};
export default Home;




// import React from 'react';
// import { FaMapMarkerAlt, FaHotel, FaMotorcycle, FaCalendarAlt, FaArrowRight } from 'react-icons/fa';

// const Home = () => {
//   return (
//     <div className="relative h-[400px] bg-cover bg-center p-8"
//          style={{ backgroundImage: "url('C:\\Users\\jinendran\\Downloads\\home section BG.png')" }}>
//       {/* Overlay for darkening the image */}
//       <div className="absolute inset-0 bg-black bg-opacity-30"></div>

//       {/* Banner Content */}
//       <div className="absolute inset-0 flex flex-col items-center justify-end pb-8">
//         <h1 className="text-white text-3xl md:text-5xl font-bold text-center mb-4">
//           Select the perfect place to relax
//         </h1>

//         {/* Button Group inside a rounded box */}
//         <div className="bg-white bg-opacity-80 p-4 rounded-full flex space-x-2">
//           <button className="bg-yellow-300 hover:bg-yellow-400 text-black px-4 py-2 rounded-full flex items-center space-x-2">
//             <FaMapMarkerAlt /> <span>Location</span>
//           </button>
//           <button className="bg-yellow-300 hover:bg-yellow-400 text-black px-4 py-2 rounded-full flex items-center space-x-2">
//             <FaHotel /> <span>Stays</span>
//           </button>
//           <button className="bg-yellow-300 hover:bg-yellow-400 text-black px-4 py-2 rounded-full flex items-center space-x-2">
//             <FaMotorcycle /> <span>Vehicles</span>
//           </button>
//           <button className="bg-yellow-300 hover:bg-yellow-400 text-black px-4 py-2 rounded-full flex items-center space-x-2">
//             <FaCalendarAlt /> <span>Date</span>
//           </button>
//           <button className="bg-green-400 hover:bg-green-500 text-white px-4 py-2 rounded-full">
//             <FaArrowRight />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;