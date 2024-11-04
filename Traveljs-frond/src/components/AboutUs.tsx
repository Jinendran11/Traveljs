import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <div  className="container bg-black mx-auto space-y-8">
      <div className="text-center">
        <h1 className="text-4xl text-white md:text-5xl font-bold p-3 font-family:'Jolly Lodger' ">About Us</h1>
      </div>
   

    <div className="bg-[#AAD770] h-[480px] flex items-center  ">
    <div className= " flex items-center mx-6  md:flex-row"></div>
      <div className="relative bg-[#89B552]  w-[1000px] h-[300px]  md:w-1/2 rounded-3xl  flex items-left pt-6 shadow-lg">

        {/* left side Text Content */}
        <div className="ml-20 text-black">
          <h1 className="text-4xl font-extrabold mb-4">
            Welcome to Traveljs Pvt Ltd,
          </h1>
          <p className="text-lg mb-2">
            We understand that exploring new destinations can sometimes be
            challenging, especially for college students,solo travelers, and foreigners 
            <div>who rely on public transportation. </div>
          </p>
          <p className="text-lg mb-6">
            While public transit can take you most of the way, some hidden gems
            and local hotspots require a bit more flexibility. That’s where we come in.
          </p>

          <button className="bg-[#4A7118] text-white text-Jolly Lodger px-6 py-2 rounded-md hover:bg-green-700">
            Contact Us
          </button>
        </div>
      </div>
      
      {/* right side image gallery */}

      <div className=" ml-16 w-[800px] h-[300px] md:w-1/2 flex space-x-4 overflow-hidden">
        {["Bike rentel", "Stays", "Natural", "Experince"].map((label, index) => (
          <div
            key={index}
            className="relative w-16 md:w-32 h-64 rounded-xl overflow-hidden transform transition-all duration-500 hover:w-50 md:hover:w-64 hover:shadow-lg"
          >
            <img
              src={`'https://t3.ftcdn.net/jpg/02/95/06/34/360_F_295063452_m2GQUK8OuemByfVrF8iXNPCS98AAkyJM.jpg',${label.toLowerCase().replace(" ", "-")}.jpg`}
              alt={label}
              className="w-full h-full object-cover"
            />
                <img
              src={`',${label.toLowerCase().replace(" ", "-")}.jpg`}
              alt={label}
              className="w-full h-full object-cover"
            />
                <img
              src={`,${label.toLowerCase().replace(" ", "-")}.jpg`}
              alt={label}
              className="w-full h-full object-cover"
            />
                <img
              src={`,${label.toLowerCase().replace(" ", "-")}.jpg`}
              alt={label}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 w-full bg-black bg-opacity-50 text-white text-center py-2">
              {label}
            </div>
          </div>
        ))}
      </div>

    </div>
</div>
  );
};

export default AboutUs;

