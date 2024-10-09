import { Router } from 'express';
import { submitReview, getReviewsForService } from '../controller/reviewController';

const router = Router();

router.post('/submit', submitReview);
router.get('/:serviceId', getReviewsForService);

export default router;
