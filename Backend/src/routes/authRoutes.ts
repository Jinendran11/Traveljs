import {Router} from "express";
import { authController } from "../controller/authcontroller";

const router = Router();

router.get('/check', authController);

export default router;