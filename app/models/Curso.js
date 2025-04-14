import mongoose from 'mongoose';
const { Schema } = mongoose;

const cursoSchema = new Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
    nome: { type: String, required: true }
});

class Curso {
    constructor(id, nome) {
        this.id = id;
        this.nome = nome;
    }
}

const createCurso = async (nome) => {
    const newCurso = new Curso(mongoose.Schema.Types.ObjectId, nome);
    return newCurso
}

export default {
    cursoSchema,
    createCurso
}