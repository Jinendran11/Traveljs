import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/Db';
import userRoutes from './routes/userroutes';
import accommodationRoutes from './routes/accommodationRoutes';
import bookingRoutes from './routes/bookingRoutes';
import paymentroute from './routes/paymentroute';
import vehicleRentalRoutes from './routes/vehicleRentalRoutes';
import reviewRoutes from './routes/reviewRoutes';
import cookieParser from 'cookie-parser';
import cors from 'cors';

dotenv.config();

const app = express();

// To allow cross-origin requests from the frontend
app.use(cors({
  origin: 'http://localhost:5173',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
}));

// Connect to the database
connectDB();

// Middleware to parse JSON
app.use(express.json());
app.use(cookieParser());

// User routes
app.use('/api/users', userRoutes);
app.use('/api/accommodation',accommodationRoutes );
app.use('/api/review', reviewRoutes);
app.use('/api/payment', paymentroute);
app.use('/api/vehicle', vehicleRentalRoutes);
app.use('/api/booking', bookingRoutes);



// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
