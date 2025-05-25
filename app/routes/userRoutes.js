import express from 'express';
import userController from '../controllers/userController.js';
import { authenticateAdmin } from '../services/authService.js';

const router = express.Router();

router.get('/', authenticateAdmin, userController.getAllUsers);
router.post('/', userController.createUser);
router.get('/:id', userController.getUserById);
router.get('/:id/universidadesSeguidas', userController.getUniversidadesSeguidas);
router.patch('/:id', userController.alterarStatusSeguindoUniversidade);

export default router;