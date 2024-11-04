import { Router } from 'express';
import { register, login, accountdelete, accountlogout } from '../controller/usercontroller';
import { authMiddleware } from '../middleware/authmiddleware';

const router= Router();

// User registration
router.post('/registration', register);

// User login
router.post('/login', login);

// Account deletion (protected route)
router.delete('/delete', authMiddleware, accountdelete);

// User logout
router.post('/logout', accountlogout);

export default router;
