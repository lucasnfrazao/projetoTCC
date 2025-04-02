import mongoose from 'mongoose';
const { Schema } = mongoose;

const cursoSchema = new Schema({
    nome: { type: String, required: true },
    departamento: { type: String, required: true },
    categoria: { type: String, required: true },
    universidade: { type: Schema.Types.ObjectId, ref: 'Universidade', required: true }
});
  
const Curso = mongoose.model('Curso', cursoSchema);

export default Curso;