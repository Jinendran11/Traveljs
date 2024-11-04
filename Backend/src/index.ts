import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
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

const app = express();   // Start the server

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// To allow cross-origin requests from the frontend
app.use(cors({
  origin: 'http://localhost:3000',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
}));

app.use((req, res, next) => {
  console.log(`Request URL: ${req.url}`);
  console.log(`Request Method: ${req.method}`);
  next();
});

// Connect to the database
connectDB();

// Middleware to parse JSON
app.use(express.json());
app.use(cookieParser());

// User routes
app.use('/api/users', userRoutes) ;
app.use('/api/accommodation',accommodationRoutes );
app.use('/api/review', reviewRoutes);
app.use('/api/payment', paymentroute);
app.use('/api/vehicle', vehicleRentalRoutes);
app.use('/api/booking', bookingRoutes);

app.get('/', (req, res) => {
  res.send("hello");
});

mongoose.connect("mongodb://localhost:27017/Traveljs")

  .then(() => {
      app.listen(PORT, () => {
          console.log(`server is running on port ${PORT}`);
      });
  })   
  .catch((e) => {
      console.error(e);

}); 