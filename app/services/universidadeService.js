import universidade from '../models/Universidade.js';

const getListaDeUniversidades = async () => {
    return await universidade.findAll();
}

const getListaDeCursos = async (id) => {
    return await universidade.getAllCursos(id);
}

const getUniversidadeWithId = async (id) => {
    return await universidade.findById(id);
}

const createUniversidade = async (data) => {
    return await universidade.createUniversidade(data);
}

export default {
    getListaDeUniversidades,
    getListaDeCursos,
    getUniversidadeWithId,
    createUniversidade
}