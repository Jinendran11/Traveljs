import React, { useState } from 'react';

const images = [

  'https://t3.ftcdn.net/jpg/02/95/06/34/360_F_295063452_m2GQUK8OuemByfVrF8iXNPCS98AAkyJM.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtYTkV3-SFuCm-H1WR5PanKthT6E9VMDsTzQ&s',
  'https://expressions-images.imgix.net/destination/sri-lanka/tea-and-hill-country/grand-hotel-nuwara-eliya-exh1606j/grand-hotel-nuwara-eliya-sri-lanka-junior-suite.jpg?w=741&h=434&fit=crop&crop=entropy&auto=format,compress,enhance',
  'https://cdn.africatravelresource.com/cdn/05explore/locations-and-lodges/africa/srilanka/nuwara-eliya/the-grand-hotel-nuwara-eliya/0/stills/03hotel/028GHN-IM302-the-grand-hotel-nuwara-eliya-1475.jpg',
  'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/5b/49/6f/img-20190204-090546-121.jpg?w=800&h=-1&s=1',
];

const Service = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="container mx-auto p-8 space-y-8">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-2">Our Services</h1>
        <p className="text-lg text-gray-600">Giving your needs the highest priority</p>
      </div>
      
      <div className=" relative w-[1220px] text-center text-gray-800 mb-8 mx-auto ">
        <p className="text-md md:text-lg">
          We provide exceptional services including vehicle rentals and comfortable accommodations.
          Whether you're looking for a quick ride or a relaxing stay, we have tailored options to meet your needs.
          Explore scenic locations with our rental vehicles, and enjoy a peaceful stay at top-rated accommodations.
        </p>
      </div>

      {/* Image Gallery with Navigation */}
      <div className="relative group w-[700px] h-[450px] mx-auto ">
        <img 
          src={images[currentIndex]} 
          alt={`Service ${currentIndex + 1}`} 
          className="w-full h-64 md:h-96 object-Full rounded-lg"
        />

        {/* Previous Button */}
        <button
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 focus:outline-none"
          onClick={prevSlide}
        >
          &#8249;
        </button>

        {/* Next Button */}
        <button
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 focus:outline-none"
          onClick={nextSlide}
        >
          &#8250;
        </button>
      </div>
    </div>
  );
};

export default Service;
