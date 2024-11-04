import { useState } from "react";

const BookingForm = () => {
  const [vehicle, setVehicle] = useState("");
  const [pickupLocation, setPickupLocation] = useState("");
  const [dropoffLocation, setDropoffLocation] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [dropoffDate, setDropoffDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      vehicle,
      pickupLocation,
      dropoffLocation,
      pickupDate,
      dropoffDate,
    });
  };

  return (
    <div className="flex flex-col items-center justify-center h-[460px] bg-black">
      <h1 className="text-4xl font-bold text-white mt-9 mb-2">Select your vehicle</h1>
      <p className="text-white ">Reserve now and get the best offer</p>

      <form
        onSubmit={handleSubmit}
        className=" p-6 rounded-lg shadow-lg w-[900px] w-full space-y-4"
      >
        <div>
          <label className="block mb-1 font-medium text-gray-700">                       {/* Vehicle Selection */}
            Choose A Vehicle
          </label>
          <select
            className="w-full px-4 py-2 rounded-md border"
            value={vehicle}
            onChange={(e) => setVehicle(e.target.value)}
          >
            <option value="">Select Vehicle</option>
            <option value="car">Car</option>
            <option value="bike">Bike</option>
            <option value="van">Van</option>
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">            {/* content for Location and Date */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Pick-up Location
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 rounded-md border"
              placeholder="Choose your Location"
              value={pickupLocation}
              onChange={(e) => setPickupLocation(e.target.value)}
            />
          </div>
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Drop-off Location
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 rounded-md border"
              placeholder="Choose your Location"
              value={dropoffLocation}
              onChange={(e) => setDropoffLocation(e.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Pick-up Date
            </label>
            <input
              type="date"
              className="w-full px-4 py-2 rounded-md border"
              value={pickupDate}
              onChange={(e) => setPickupDate(e.target.value)}
            />
          </div>
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Drop-off Date
            </label>
            <input
              type="date"
              className="w-full px-4 py-2 rounded-md border"
              value={dropoffDate}
              onChange={(e) => setDropoffDate(e.target.value)}
            />
          </div>
        </div>

        <div className="flex items-center justify-center">
        <button
          type="submit"
          className=" bg-[#9AAD24] text-black text-4xl font-bold p-10 py-2 mt-4 mb-6 rounded-md hover:bg-green-600"
        >
          Book Now
        </button>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;
