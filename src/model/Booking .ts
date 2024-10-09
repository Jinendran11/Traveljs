import mongoose, { Schema, Document } from 'mongoose';

interface IBooking extends Document {
  userId: mongoose.Schema.Types.ObjectId;
  serviceId: mongoose.Schema.Types.ObjectId;
  bookingDates: { start: Date; end: Date };
}

const bookingSchema: Schema = new Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  serviceId: { type: mongoose.Schema.Types.ObjectId, required: true },
  bookingDates: {
    start: { type: Date, required: true },
    end: { type: Date, required: true }
  }
}, {
  timestamps: true,
});

export default mongoose.model<IBooking>('Booking', bookingSchema);
