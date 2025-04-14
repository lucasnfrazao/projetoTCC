import universidade from '../models/Universidade.js';

const getListaDeUniversidades = async () => {
    return await universidade.findAll();
}

const getUniversidadeWithId = async (id) => {
    return await universidade.findById(id);
}

const createUniversidade = async (data) => {
    return await universidade.createUniversidade(data);
}

export default {
    getListaDeUniversidades,
    getUniversidadeWithId,
    createUniversidade
}