import { Router } from 'express';
import { createBooking, getUserBookings, cancelBooking } from '../controller/bookingController';


const router = Router();

router.post('/create', createBooking);
router.get('/user-bookings', getUserBookings);
router.delete('/cancel/:bookingId', cancelBooking);

export default router;
