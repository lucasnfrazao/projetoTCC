import express from 'express';
import universidadeController from '../controllers/universidadeController.js';
import { authenticateAdmin } from '../services/authService.js';

const router = express.Router();

/// Post
router.post('/', authenticateAdmin, universidadeController.createUniversidade);

/// Get
router.get('/', universidadeController.getListaDeUniversidades);
router.get('/:id', universidadeController.getUniversidadeWithId);
router.get('/:id/cursos', universidadeController.getListaDeCursos);
router.get('/:id/vestibulares', universidadeController.getListaDeVestibulares);
router.get('/:id/seguidores', universidadeController.getNumeroDeSeguidores);

/// Put
router.put('/:id', universidadeController.updateDataUniversidade);

export default router;