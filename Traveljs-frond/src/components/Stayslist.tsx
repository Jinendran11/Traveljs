import React, { useState } from 'react';
import { FaBed, FaCalendarAlt } from 'react-icons/fa';

const stays = [
    {
        id: 1,
        name: 'Luxury Hotel',
        location: 'Nuwareliya',
        rentalPerDay: 10,
        rating: 4.5,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPxSBD-QttU3jBWzap77J26dAQ1lmcb4eqDQ&s',
    },
    {
        id: 2,
        name: 'Villa Grand',
        location: 'Thalawakala',
        rentalPerDay: 20,
        rating: 4.2,
        image: 'https://lh3.googleusercontent.com/proxy/50Jmgj8DZSS55Il-HXivN2UqYS-TJ-DRlCDW8jwLKeevt2WEY6GckcoByq4XGZTCQmCTc7D3yE18bwFMpar9qA-kHbQwGka8pdmNPYTqwzGt6VMeQrpSMqFimaT8T0PdwtTMM_q8h_ub1dfUiLc835oyQldAvQ=w287-h192-n-k-rw-no-v1', 
    },
    {
        id: 3,
        name: 'Homestay',
        location: 'Hatton',
        rentalPerDay: 35,
        rating: 4.5,
        image: 'https://lh3.googleusercontent.com/p/AF1QipNEnO1Atbk1j_beRBixg2Xz3yTiOe9-sFGVMQlq=w287-h192-n-k-rw-no-v1',
    },
    {
        id: 4,
        name: 'Little England Bungalow',
        location: 'Nanuoya',
        rentalPerDay: 40,
        rating: 4.0,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkXuJ9yCVzz0zLsM7GKQpItuLPJVQE_NC0wA&s',
    },
];

const StaysList = () => {
    const [location, setLocation] = useState('');
    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);
    const [rooms, setRooms] = useState(1);

    return (
        <div className="container  ">
            {/* Section 1 */}
            <div className="bg-[#82A754] p-8 mb-10">
                <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/2 md:pr-8">
                        <h1 className="text-6xl font-extrabold text-white mx-12 mt-5 mb-2">Select the perfect place to relax</h1>
                        <p className="text-lg text-black-800 mx-12 mt-5 mb-2">Relax in comfort and style, surrounded by nature and local charm. Discover the perfect retreat with all the amenities you need for an unforgettable stay.</p>
                    </div>
                    <div className="md:w-1/2">
                        <div className="bg-[#79773A]  mx-12 p-6 rounded-lg shadow">
                        <div className="flex items-center justify-center">
                           <p className="text-white mb-6 mt-2 text-2xl font-bold">Find Your Perfect Stay</p>
                        </div>
                            <div className="mb-4 flex items-center">
                                <FaBed className="text-black-500 mr-2" />
                                <input
                                    type="text"
                                    placeholder="Where are you going?"
                                    value={location}
                                    onChange={(e) => setLocation(e.target.value)}
                                    className="border border-gray-300 p-2 rounded flex-1"
                                />
                            </div>
                            <div className="mb-4 flex items-center">
                                <FaCalendarAlt className="text-black-500 mr-2" />
                                <input
                                    type="date"
                                    value={checkIn}
                                    onChange={(e) => setCheckIn(e.target.value)}
                                    className="border border-gray-300 p-2 rounded flex-1"
                                    placeholder="Check-in date"
                                />
                            </div>
                            <div className="mb-4 flex items-center">
                                <FaCalendarAlt className="text-black-500 mr-2" />
                                <input
                                    type="date"
                                    value={checkOut}
                                    onChange={(e) => setCheckOut(e.target.value)}
                                    className="border border-gray-300 p-2 rounded flex-1"
                                    placeholder="Check-out date"
                                />
                            </div>
                            <div className="flex justify-between mb-4">
                                <select
                                    value={adults}
                                    onChange={(e) => setAdults(e.target.value)}
                                    className="border border-gray-300 p-2 rounded w-1/3 mr-2"
                                >
                                    <option value="1">Adults: 1</option>
                                    <option value="2">Adults: 2</option>
                                    <option value="3">Adults: 3</option>
                                </select>
                                <select
                                    value={children}
                                    onChange={(e) => setChildren(e.target.value)}
                                    className="border border-gray-300 p-2 rounded w-1/3 mx-2"
                                >
                                    <option value="0">Children: 0</option>
                                    <option value="1">Children: 1</option>
                                    <option value="2">Children: 2</option>
                                </select>
                                <select
                                    value={rooms}
                                    onChange={(e) => setRooms(e.target.value)}
                                    className="border border-gray-300 p-2 rounded w-1/3 ml-2"
                                >
                                    <option value="1">Rooms: 1</option>
                                    <option value="2">Rooms: 2</option>
                                    <option value="3">Rooms: 3</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Section 2 */}
            <div className="flex flex-col mx-14 mt-5 mb-2 md:flex-row">
                <div className="md:w-1/3 md:pr-4 mb-4">
                    <div className="mb-4">
                        <h2 className="text-xl font-bold">Google Map</h2>
                        <div className="h-64 bg-gray-200 rounded-lg">
                            <iframe
                                src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d4783.142910914896!2d80.04078838954187!3d6.809988981863679!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2slk!4v1730028535096!5m2!1sen!2slk${location}`}
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                // allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow">
                        <h3 className="text-lg font-bold mb-2">Filter By</h3>
                        <input
                            type="text"
                            placeholder="Filter"
                            className="border border-gray-300 p-2 rounded mb-4 w-full"
                        />
                    </div>
                </div>

                <div className="md:w-2/3 md:pl-4">                                                        {/* Right Column: Stays List */}
                    <div className="flex justify-between mb-4">
                        <button className="bg-blue-500 text-white px-4 py-2 rounded">Sort By</button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {stays.map(stay => (
                            <div key={stay.id} className="bg-white p-4 rounded-lg shadow flex flex-col">
                                <img
                                    src={stay.image}
                                    alt={stay.name}
                                    className="rounded-lg mb-4 w-full h-48 object-cover"
                                />
                                <h4 className="font-bold text-xl">{stay.name}</h4>
                                <p>{stay.location}</p>
                                <p>Rental: ${stay.rentalPerDay}/day</p>
                                <p>Rating: {stay.rating} ★</p>
                                <button className="bg-green-400 text-white px-4 py-2 rounded mt-auto hover:bg-green-600 transition">Check</button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StaysList;
