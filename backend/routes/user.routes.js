import express from 'express';
import protectRoute from '../middleware/protectRoute.js';
import { getUsersForSidebar } from '../controllers/user.controller.js'; // Import getUsersForSidebar function

const router = express.Router();

router.get("/", protectRoute, getUsersForSidebar); // Use getUsersForSidebar function

export default router;
