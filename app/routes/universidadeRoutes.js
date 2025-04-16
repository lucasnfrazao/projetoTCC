import express from 'express';
import universidadeController from '../controllers/universidadeController.js';

const router = express.Router();

/// Post
router.post('/', universidadeController.createUniversidade);

/// Get
router.get('/', universidadeController.getListaDeUniversidades);
router.get('/:id', universidadeController.getUniversidadeWithId);
router.get('/:id/cursos', universidadeController.getListaDeCursos);
router.get('/:id/vestibulares', universidadeController.getListaDeVestibulares);

/// Patches
router.patch('/:id', universidadeController.updateDataUniversidade);

export default router;