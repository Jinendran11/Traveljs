import { Router } from 'express';
import { listVehicleRentals, searchVehicleRentals, bookVehicleRental } from '../controller/vehicleRentalController';

const router = Router();

router.get('/list', listVehicleRentals);
router.get('/search', searchVehicleRentals);
router.post('/book', bookVehicleRental);

export default router;
