// import { Request, Response, NextFunction } from 'express';
// import jwt from 'jsonwebtoken';
// import { User,IUser } from '../model/user';  // Use correct path to your user model
// import { Types } from 'mongoose';

// export interface AuthRequest extends Request {
//   user?: IUser;
//   }

// export const authMiddleware = async (req: AuthRequest, res: Response, next: NextFunction) => {
//   const token = req.header('Authorization')?.replace('Bearer ', '');

//   if (!token) {
//     return res.status(401).json({ message: 'No token, authorization denied' });
//   }

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { id: Types.ObjectId }; ;

//     // Attach the user to the request object
//     const user = await User.findById(decoded.id).select('-password');
//     if (!user) {
//       return res.status(404).json({ message: 'User not found' });
//     }

//     (req as AuthRequest).user = user;  // Attach the user object to the request

//     next();
//   } catch (error) {
//     console.error('Auth error:', error);
//     res.status(401).json({ message: 'Token is not valid' });
//   }
// };


import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { User } from '../model/user';  // Use correct path to your user model
import { Types } from 'mongoose';

export const authMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    res.status(401).json({ message: 'No token, authorization denied' });
    return;  // Explicit return to ensure void is returned
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { id: Types.ObjectId };;
    // Attach the user to the request object
    const user = await User.findById(decoded.id).select('-password');
    if (!user) {
      res.status(404).json({ message: 'User not found' });
      return;  // Explicit return to ensure void is returned
    }

    req.body = user;  // Attach the user object to the request

    next();  // Call next to proceed with the request
  } catch (error) {
    console.error('Auth error:', error);
    res.status(401).json({ message: 'Token is not valid' });
    return;  // Explicit return to ensure void is returned
  }
 };