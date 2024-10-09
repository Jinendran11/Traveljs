import { Router } from 'express';
import { listAccommodations, searchAccommodations, bookAccommodation } from '../controller/accommodationController';

const router = Router();

router.get('/list', listAccommodations);
router.get('/search', searchAccommodations);
router.post('/book', bookAccommodation);

export default router;
