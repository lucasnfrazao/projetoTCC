import mongoose from 'mongoose';

const { Schema } = mongoose;

const universidadeSchema = new Schema({
    nome: String,
    descricao: String,
    cidade: String,
    uf: String,
    coverImageURL: String,
    cursos: [],
    vestibulares: [],
    usuariosSeguindo: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    coverImageURL: String
});

const Universidade = mongoose.model('Universidade', universidadeSchema);

const createUniversidade = async (data) => {
  const newUni = new Universidade({ 
    nome: data.nome,
    descricao: data.descricao,
    cidade: data.cidade, 
    uf: data.uf, 
    cursos: data.cursos,
    vestibulares: data.vestibulares,
    usuariosSeguindo: data.usuariosSeguindo,
    coverImageURL: data.coverImageURL
  });
  
  await newUni.save();
  return newUni;
}

const findAll = async () => {
    const unis = await Universidade.find();

    const uniMap = {};
    unis.forEach((uni) => {
      uniMap[uni._id] = uni;
    });
    
    return uniMap;
};

const getAllCursos = async (id) => {
  const universidade = await Universidade.findById(id);
  return universidade.cursos;
};

const getAllVestibulares = async (id) => {
  const universidade = await Universidade.findById(id);
  return universidade.vestibulares;
};

const findById = async (id) => {
    return await Universidade.findById(id);
}

const findUniversidadeAndUpdateWithData = async (id, data) => {
    const updatedUni = await Universidade.findByIdAndUpdate(
      id,
      { $set: data },
      { new: true }
    );
    return updatedUni
};
  
export default {
  createUniversidade,
  findAll,
  findById,
  findUniversidadeAndUpdateWithData,
  getAllCursos,
  getAllVestibulares,
  Universidade
};