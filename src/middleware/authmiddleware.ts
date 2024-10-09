// import jwt from 'jsonwebtoken';
// import { Request, Response, NextFunction } from 'express';
// import {User,IUser} from '../model/user';

// // Define an interface for the AuthRequest
// interface AuthRequest extends Request {
//   user?: { id: string };
// }

// // Protect routes middleware
// export const protect = async (req: AuthRequest, res: Response, next: NextFunction) => {
//   const token = req.headers.authorization?.split(' ')[1];

//   if (!token) {
//     return res.status(401).json({ message: 'Not authorized, no token' });
//   }

//   try {
//     // Verify the token
//     const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { id: string };

//     // Attach the user to the request object
//     req.user = { id: decoded.id };

//     next();
//   } catch (error) {
//     res.status(401).json({ message: 'Not authorized, invalid token' });
//   }
// };
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { User } from '../model/user';  // Use correct path to your user model

export const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    return res.status(401).json({ message: 'No token, authorization denied' });
  }

  try {
    const decoded: any = jwt.verify(token, process.env.JWT_SECRET!);

    // Attach the user to the request object
    const user = await User.findById(decoded.id).select('-password');
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    req.user = user;  // Attach the user object to the request

    next();
  } catch (error) {
    console.error('Auth error:', error);
    res.status(401).json({ message: 'Token is not valid' });
  }
};
