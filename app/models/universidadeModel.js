import mongoose from 'mongoose';
const { Schema } = mongoose;

const universidadeSchema = new Schema({
    nome: String,
    descricao: String,
    cidade: String,
    uf: String
  });
  
const Universidade = mongoose.model('Universidade', universidadeSchema);

export default Universidade;