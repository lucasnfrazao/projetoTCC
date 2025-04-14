import cursoModel from '../models/Curso.js';

const createCurso = async (nome) => {
    return await cursoModel.createCurso(nome);
}

export default {
    createCurso
}