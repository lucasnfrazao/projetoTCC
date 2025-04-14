import express from 'express';
import universidadeController from '../controllers/universidadeController.js';

const router = express.Router();

router.get('/', universidadeController.getListaDeUniversidades);
router.post('/', universidadeController.createUniversidade);
router.get('/:id', universidadeController.getUniversidadeWithId);

export default router;