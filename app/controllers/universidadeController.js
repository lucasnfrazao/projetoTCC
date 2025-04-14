import universidadeService from '../services/universidadeService.js';
import cursoService from '../services/cursoService.js';

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

const getUniversidadeWithId = async (req, res) => {
    const id = req.body;
    return universidadeService.getUniversidadeWithId(id);
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

export default {
    getListaDeUniversidades,
    getListaDeCursos,
    getUniversidadeWithId,
    createUniversidade
}