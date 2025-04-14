import express from 'express';
import universidadeController from '../controllers/universidadeController.js';

const router = express.Router();

router.get('/', universidadeController.getListaDeUniversidades);
router.post('/', universidadeController.createUniversidade);
router.get('/:id', universidadeController.getUniversidadeWithId);
router.get('/:id/cursos', universidadeController.getListaDeCursos);
router.get('/:id/vestibulares', universidadeController.getListaDeVestibulares);

export default router;