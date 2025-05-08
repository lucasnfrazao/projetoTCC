import express from 'express';
import authController from '../controllers/authController.js';
import { authenticate } from '../services/authService.js';

const router = express.Router();

router.post('/register', authController.registerStudent);
router.post('/login', authController.loginUser);
router.get('/me', authenticate, authController.getCurrentUser)

export default router;