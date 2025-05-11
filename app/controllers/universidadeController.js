import universidadeService from '../services/universidadeService.js';

const getListaDeUniversidades = async (req, res) => {
    const universidades = await universidadeService.getListaDeUniversidades();
    res.status(200).json(universidades);
};

const getListaDeCursos = async (req, res) => {
    const id = req.params.id;

    if (id === null) {
        res.status(404).json({msg: 'id inválido'});
        return
    }

    const cursos = await universidadeService.getListaDeCursos(id);

    if (cursos === null) {
        res.status(404).json({msg: 'could not find cursos'});
        return
    }

    res.status(200).json(cursos);
};

const getListaDeVestibulares = async (req, res) => {
    const id = req.params.id;
    console.log(id);

    if (id === null) {
        res.status(404).json({msg: 'id inválido'});
        return
    }

    const vestibulares = await universidadeService.getListaDeVestibulares(id);

    if (vestibulares === null) {
        res.status(404).json({msg: 'could not find cursos'});
        return
    }

    res.status(200).json(vestibulares);
};

const getUniversidadeWithId = async (req, res) => {
    const id = req.params.id;
    
    const universidadeModel = await universidadeService.getUniversidadeWithId(id);

    if (!universidadeModel) {
        res.status(404);
        return
    }

    console.log(universidadeModel);
    res.status(200).json(universidadeModel);
};

const createUniversidade = async (req, res) => {
    const {nome, descricao, cidade, estado, cursos} = req.body;

    var cursoArray = new Array();
    cursos.forEach(nomeCurso => {
        const newCurso = {
            nome: nomeCurso
        };
        cursoArray.push(newCurso)
    });

    const data = {
        nome: nome,
        descricao: descricao,
        cidade: cidade,
        estado: estado,
        cursos: cursoArray
    };

    const newUniversidade = universidadeService.createUniversidade(data);

    res.status(200).json(newUniversidade);
};

const updateDataUniversidade = async (req, res) => {
    const id = req.params.id;
    const updateDict = req.body;
    const updateType = updateDict["type"];
    const updateContent = updateDict["content"];

    if (updateType === null) {
        res.status(404)
        return
    }

    if (updateContent === null) {
        res.status(404)
        return
    }

    var jsonData = {};
    jsonData[updateType] = updateContent;

    const newUni = universidadeService.findUniversidadeAndUpdateWithData(id, jsonData);
    res.status(200).json(newUni);
};

export default {
    getListaDeUniversidades,
    getListaDeCursos,
    getListaDeVestibulares,
    getUniversidadeWithId,
    createUniversidade,
    updateDataUniversidade
}