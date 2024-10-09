import { Request, Response } from 'express';
import Booking from '../model/Booking ';

// Create a new booking
export const createBooking = async (req: Request, res: Response) => {
  try {
    const { userId, serviceId, bookingDates } = req.body;
    const booking = new Booking({ userId, serviceId, bookingDates });
    await booking.save();
    res.status(201).json({ message: 'Booking created successfully', booking });
  } catch (error) {
    res.status(500).json({ message: 'Error creating booking', error });
  }
};

// Get all bookings for a user
export const getUserBookings = async (req: Request, res: Response) => {
  try {
    const bookings = await Booking.find({ userId: req.user?.id });
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving bookings', error });
  }
};

// Cancel a booking
export const cancelBooking = async (req: Request, res: Response) => {
  try {
    const { bookingId } = req.params;
    const booking = await Booking.findByIdAndDelete(bookingId);

    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }

    res.json({ message: 'Booking canceled successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error canceling booking', error });
  }
};
