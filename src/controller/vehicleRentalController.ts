import { Request, Response } from 'express';
import VehicleRental from '../model/vehiclerent';
import Booking from '../model/Booking ';

// List all vehicle rentals
export const listVehicleRentals = async (req: Request, res: Response) => {
  try {
    const vehicles = await VehicleRental.find();
    res.json(vehicles);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving vehicle rentals', error });
  }
};

// Search for vehicle rentals based on type or location
export const searchVehicleRentals = async (req: Request, res: Response) => {
  try {
    const { type, location } = req.query;
    const vehicles = await VehicleRental.find({ type, location });
    res.json(vehicles);
  } catch (error) {
    res.status(500).json({ message: 'Error searching vehicle rentals', error });
  }
};

// Book a vehicle rental
export const bookVehicleRental = async (req: Request, res: Response) => {
  try {
    const { userId, vehicleId, dates } = req.body;
    const booking = new Booking ({ userId, vehicleId, dates });
    await booking.save();
    res.status(201).json({ message: 'Vehicle rental booked successfully', booking });
  } catch (error) {
    res.status(500).json({ message: 'Error booking vehicle', error });
  }
};
