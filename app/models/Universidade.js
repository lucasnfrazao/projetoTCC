import mongoose from 'mongoose';
import cursoModel from './Curso.js';
import vestibular from './Vestibular.js';
const { Schema } = mongoose;

//const Vestibular = new Object();

const universidadeSchema = new Schema({
    nome: String,
    descricao: String,
    cidade: String,
    uf: String,
    cursos: [
      {
      _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
      nome: { type: String, required: true }
      }
    ],
    vestibulares: [vestibular]
});

const Universidade = mongoose.model('Universidade', universidadeSchema);

const findAll = async () => {
    const unis = await Universidade.find();

    const uniMap = {};
    unis.forEach((uni) => {
      uniMap[uni._id] = uni;
    });
    
    return uniMap;
};

const createUniversidade = async (data) => {
    const newUni = new Universidade({ 
      nome: data.nome,
      descricao: data.descricao,
      cidade: data.cidade, 
      uf: data.uf, 
      cursos: data.cursos,
      vestibulares: data.vestibulares
    });
    console.log(newUni);
    await newUni.save();
    return newUni;
}

const findById = async (id) => {
    console.log(id);
    return await Universidade.findById(id);
}
  
export default {
  createUniversidade,
  findAll,
  findById
};