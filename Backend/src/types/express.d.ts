import { User,IUser } from '../model/user';  // Make sure to use the right path to your user model

declare global {
  namespace Express {
    interface Request {
      user?: IUser;  // Add the user property to the Request interface
    }
  }
}
declare global {
  namespace Express {
    interface Request {
      user?: {
        id: string;
      };
    }
  }
}
