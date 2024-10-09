import mongoose, { Schema,model, Document } from 'mongoose';
import bcrypt from 'bcrypt';

// Define an interface for the user
export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  UserType:'Traveller'|'ServiceProvider'|'Admin';
  Address: string
  Phone: string
  comparePassword(candidatePassword: string): Promise<boolean>;
}

const userSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  address: { 
    type: String, 
    required: true 
  },
  phone: { 
    type: String, 
    required: true 
  },
  userType: { 
    type: String, 
    required: true, 
    enum: ['Traveller', 'ServiceProvider', 'Admin'] 
  },
});
userSchema.pre<IUser>('save', async function (next) {
  if (!this.isModified('password')) {
      return next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});
userSchema.methods.comparePassword = async function (candidatePassword: string): Promise<boolean> {
  return bcrypt.compare(candidatePassword, this.password);
};

export const User = mongoose.model<IUser>('User', userSchema);
//export { User, IUser};
