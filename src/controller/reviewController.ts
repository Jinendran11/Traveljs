import { Request, Response } from 'express';
import Review from '../model/Review';

// Submit a review
export const submitReview = async (req: Request, res: Response) => {
  try {
    const { userId, serviceId, rating, comment } = req.body;
    const review = new Review({ userId, serviceId, rating, comment });
    await review.save();
    res.status(201).json({ message: 'Review submitted', review });
  } catch (error) {
    res.status(500).json({ message: 'Error submitting review', error });
  }
};

// Get all reviews for a service (accommodation or vehicle)
export const getReviewsForService = async (req: Request, res: Response) => {
  try {
    const { serviceId } = req.params;
    const reviews = await Review.find({ serviceId });
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving reviews', error });
  }
};
