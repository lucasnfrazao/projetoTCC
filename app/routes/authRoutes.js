import express from 'express';
import authController from '../controllers/authController.js';

const router = express.Router();

router.post('/register', authController.registerStudent);
// router.post('/', userController.createUser);
// router.get('/:id', userController.getUserById);

export default router;