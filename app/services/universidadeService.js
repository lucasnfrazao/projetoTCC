import universidade from '../models/Universidade.js';

const getListaDeUniversidades = async () => {
    return await universidade.findAll();
}

const getListaDeCursos = async (id) => {
    return await universidade.getAllCursos(id);
}

const getListaDeVestibulares = async (id) => {
    return await universidade.getAllVestibulares(id);
}

const getListaDeVestibularPorUniversidade = async (id) => {
    return await universidade.getAllVestibulares(id);
}

const getUniversidadeWithId = async (id) => {
    return await universidade.findById(id);
}

const createUniversidade = async (data) => {
    return await universidade.createUniversidade(data);
}

const findUniversidadeAndUpdateWithData = async (id, data) => {
    return await universidade.findUniversidadeAndUpdateWithData(id, data);
}

export default {
    getListaDeUniversidades,
    getListaDeCursos,
    getListaDeVestibulares,
    getUniversidadeWithId,
    findUniversidadeAndUpdateWithData,
    createUniversidade
}