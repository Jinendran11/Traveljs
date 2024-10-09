import { Request, Response } from 'express';
import Accommodation from '../model/accommodation';
import Booking from '../model/Booking ';

// List all accommodations
export const listAccommodations = async (req: Request, res: Response) => {
  try {
    const accommodations = await Accommodation.find();
    res.json(accommodations);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving accommodations', error });
  }
};

// Search for accommodations based on location
export const searchAccommodations = async (req: Request, res: Response) => {
  try {
    const { location } = req.query;
    const accommodations = await Accommodation.find({ location });
    res.json(accommodations);
  } catch (error) {
    res.status(500).json({ message: 'Error searching accommodations', error });
  }
};

// Book accommodation
export const bookAccommodation = async (req: Request, res: Response) => {
  try {
    const { userId, accommodationId, dates } = req.body;
    const booking = new Booking({ userId, accommodationId, dates });
    await booking.save();
    res.status(201).json({ message: 'Accommodation booked successfully', booking });
  } catch (error) {
    res.status(500).json({ message: 'Error booking accommodation', error });
  }
};
