import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { User } from '../model/user';
import { AuthRequest } from './authcontroller';

//User Registration
export const register = async (req: Request, res: Response): Promise<Response | void> => {
  const { name, email, password } = req.body;

  try {
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = new User({ name, email, password: hashedPassword });
    await user.save();

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET!, { expiresIn: '1h' });
    return res.status(201).json({ message: 'User registered', token });
  } catch (error) {
    return res.status(500).json({ message: 'Server error' });
  }
};

// User Login
export const login = async (req: Request, res: Response): Promise<Response | void> => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET!, { expiresIn: '1h' });
    return res.json({ message: 'Login successful', token });
  } catch (error) {
    return res.status(500).json({ message: 'Server error' });
  }
};

// Account Deletion
export const accountdelete = async (req: AuthRequest, res: Response) => {
  const userId = (req as AuthRequest).user?._id;

  try {
    const user = await User.findByIdAndDelete(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    return res.json({ message: 'Account deleted' });
  } catch (error) {
    return res.status(500).json({ message: 'Server error' });
  }
};

// User Logout
export const accountlogout = async (req: Request, res: Response) => {
  res.clearCookie('jwt', { httpOnly: true });
  // In a token-based system, logout is typically handled client-side by deleting the token
  // Here, we can inform the client to remove the token 
  res.json({ message: 'Logout successful' });
};
