import mongoose from 'mongoose';
import curso from './Curso.js';
import vestibular from './Vestibular.js';
const { Schema } = mongoose;

const universidadeSchema = new Schema({
    nome: String,
    descricao: String,
    cidade: String,
    uf: String,
    cursos: [curso],
    vestibulares: [vestibular]
  });
  
const Universidade = mongoose.model('Universidade', universidadeSchema);

export default Universidade;