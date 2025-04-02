import mongoose from 'mongoose';
import express from 'express';

import Universidade from './models/universidadeModel.js';
import Curso from './models/cursoModel.js';
//const Universidade = require(');

const { Schema } = mongoose;
const app = express();
app.use(express.json());

const PORT = 4000;

// MongoDB connection
const mongoURI = 'mongodb://root:example@127.0.0.1:27017/vestibulario?authSource=admin'

async function main() {
  await mongoose.connect(mongoURI)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err, 'Erro ao Conectar'));

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

main().catch(err => console.log(err));

app.get('/', (req, res) => {
  res.send('Hello from Node.js with MongoDB!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.get('/universidades', async (req, res) => {
  const universidades = await Universidade.find();
  console.log(universidades);
  res.send(universidades);
});

app.get('/universidades/:id', async (req, res) => {
  const universidade = await Universidade.findById(req.params.id);
  console.log(universidade);
  res.send(universidade);
});

app.post('/universidades', async (req, res) => {
  try {
    const body = req.body;
    const uni = new Universidade({
      nome: body.nome,
      descricao: body.descricao, 
      cidade: body.cidade,
      uf: body.uf
      });
    await uni.save();
    console.log(req.body);
    res.send(`Criei Universidade! + ${uni.id}`);
  } catch(err) {
    console.log(err);
    res.send(`Erro ao criar universidade! + ${err}`);
  }
});

app.get('/cursos', async (req, res) => {
  try {
    const cursos = await Curso.find().populate("universidade");
    console.log(cursos);
    res.send(`Achei Curso! + ${cursos.id}`);
  } catch(err) {
    console.log(err);
    res.send(`Erro ao criar curso! + ${err}`);
  }
});

app.post('/cursos', async (req, res) => {
  try {
    const body = req.body;
    const curso = new Curso({
      nome: body.nome,
      departamento: body.departamento, 
      categoria: body.categoria,
      universidade: body.universidade
      });
    await curso.save();
    console.log(req.body);
    res.send(`Criei Curso! + ${curso.id}`);
  } catch(err) {
    console.log(err);
    res.send(`Erro ao criar curso! + ${err}`);
  }
});

app.put('/universidades/:id', async (req, res) => {

});