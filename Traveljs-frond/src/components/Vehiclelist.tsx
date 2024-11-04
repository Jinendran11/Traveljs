import React from 'react';

const vehicles = [
    {
        id: 1, name: 'Honda Dio', image: 'https://vahanamx.com/wp-content/uploads/2023/04/Honda-Dio.jpg', rentalPrice: 25,
    },
    {
        id: 2, name: 'Yamaha Tw', image: 'https://vahanamx.com/wp-content/uploads/2024/03/Yamaha-TW.jpg', rentalPrice: 30,
    },
    {
        id: 3, name: 'TVS Ronin 225 BS6', image: 'https://vahanamx.com/wp-content/uploads/2024/03/TVS-Ronin-225-BS6.jpg', rentalPrice: 50,
    },
    {
        id: 4, name: 'Kawasaki-Ninja_& Hybrid', image: 'https://vahanamx.com/wp-content/uploads/2024/03/Kawasaki-Ninja-7-Hybrid.jpg', rentalPrice: 25,
    },
    {
        id: 5, name: 'Bajaj CT100', image: 'https://vahanamx.com/wp-content/uploads/2024/03/CT-100.jpg', rentalPrice: 30,
    },
    {
        id: 6, name: 'Audi A4 Car', image: 'https://vahanamx.com/wp-content/uploads/2023/11/Audi-A4.jpg', rentalPrice: 50,
    },
    {
        id: 7, name: 'Suzuki Access Electric', image: 'https://vahanamx.com/wp-content/uploads/2023/05/Suzuki-Access-Electric-cs.jpg', rentalPrice: 70,
    },
];

const VehicleCard = ({ vehicle }) => {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img 
                className="w-full h-48 object-cover  transition-transform duration-500 ease-in-out " 
                src={vehicle.image} 
                alt={vehicle.name} 
            />
            <div className="p-4">
                <h2 className="text-lg font-bold">{vehicle.name}</h2>
                <p className="text-gray-700">Rental Price: ${vehicle.rentalPrice}/day</p>
                <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
                    Continue Booking
                </button>
            </div>
        </div>
    );
};

const VehicleList = () => {
    return (
        <div className="container mx-auto px-6 py-8">
            <h1 className="text-4xl font-bold mb-6 text-center">Available Vehicles</h1>
            <div className="flex justify-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl">
                    {vehicles.map(vehicle => (
                        <VehicleCard key={vehicle.id} vehicle={vehicle} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default VehicleList;


// import React from 'react';

// const vehicles = [
//     {
//         id: 1,name: 'Honda Dio',image: 'https://vahanamx.com/wp-content/uploads/2023/04/Honda-Dio.jpg',rentalPrice: 25,
//     },
//     {
//         id: 2,name: 'Yamaha Tw',image: 'https://vahanamx.com/wp-content/uploads/2024/03/Yamaha-TW.jpg',rentalPrice: 30,
//     },
//     {
//         id: 3,name: 'TVS Ronin 225 BS6',image: 'https://vahanamx.com/wp-content/uploads/2024/03/TVS-Ronin-225-BS6.jpg',rentalPrice: 50,
//     },
//     {
//         id: 1,name: 'Kawasaki-Ninja_& Hybrid',image: 'https://vahanamx.com/wp-content/uploads/2024/03/Kawasaki-Ninja-7-Hybrid.jpg',rentalPrice: 25,
//     },
//     {
//         id: 2,name: 'Bajaj CT100',image: 'https://vahanamx.com/wp-content/uploads/2024/03/CT-100.jpg', rentalPrice: 30,
//     },
//     {
//         id: 3,name: 'Audi A4 Car',image: 'https://vahanamx.com/wp-content/uploads/2023/11/Audi-A4.jpg',rentalPrice: 50,
//     },
//     {
//         id: 4,name: 'Suzuki Access Elecric',image: 'https://vahanamx.com/wp-content/uploads/2023/05/Suzuki-Access-Electric-cs.jpg', rentalPrice: 70,
//     },

// ];

// const VehicleCard = ({ vehicle }) => {
//     return (
//         <div className="max-w-xs mx-auto bg-white rounded-lg shadow-md overflow-hidden">
//             <img className="w-full h-48 object-cover" src={vehicle.image} alt={vehicle.name} />
//             <div className="p-4">
//                 <h2 className="text-lg font-bold">{vehicle.name}</h2>
//                 <p className="text-gray-700">Rental Price: ${vehicle.rentalPrice}/day</p>
//                 <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
//                     Continue Booking
//                 </button>
//             </div>
//         </div>
//     );
// };

// const VehicleList = () => {
//     return (
//         <div className="container mx-auto px-4 py-8">
//             <h1 className="text-2xl font-bold mb-6 text-center">Available Vehicles</h1>
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//                 {vehicles.map(vehicle => (
//                     <VehicleCard key={vehicle.id} vehicle={vehicle} />
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default VehicleList;
