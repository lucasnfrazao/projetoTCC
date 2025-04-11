import mongoose from 'mongoose';
import express from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

import userService from './services/userService.js';

import Universidade from './models/Universidade.js';
import User from './models/User.js';

import userRoutes from './routes/userRoutes.js';
import authRoutes from './routes/authRoutes.js';

const { Schema } = mongoose;
const app = express();
app.use(express.json());
const PORT = 4000;

// MongoDB connection
async function main() {

  /// Usado para carregar .env file
  dotenv.config();

  const mongoURI = `mongodb://${process.env.MONGO_INITDB_ROOT_USERNAME}:${process.env.MONGO_INITDB_ROOT_PASSWORD}@127.0.0.1:27017/vestibulario?authSource=admin`
  
  await mongoose.connect(mongoURI)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err, 'Erro ao Conectar'));
}

main().catch(err => console.log(err));

// Public Route
app.get('/', (req, res) => {
  res.send('Hello from Node.js with MongoDB!');
});

app.use('/user', userRoutes);
app.use('/auth', authRoutes);

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

app.post('/universidades', checkIfAdmin, async (req, res) => {
  try {
    const body = req.body;

    const universidadeExiste = await Universidade.findOne({ nome: body.nome })

    if (universidadeExiste !== null) {
      return res.status(500).json({msg: 'Universidade já existe...'});
    }

    const uni = new Universidade({
      nome: body.nome,
      descricao: body.descricao, 
      cidade: body.cidade,
      uf: body.uf,
      cursos: body.cursos
      });

    await uni.save();

    console.log(req.body);
    res.status(201).json({ uni});
  } catch(err) {
    console.log(err);
    res.send(`Erro ao criar universidade! + ${err}`);
  }
});

// Private Route
/*
app.get('/user/:id', checkToken, async (req, res) => {

  const id = req.params.id;

  // -password excluiu a senha do usuário.
  const user = await User.findById(id, '-password');

  if (!user) {
    return res.status(404).json({msg: 'User não encontrado...'});
  }

  res.status(200).json({ user });
});
*/

// Middleware
function checkToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(" ")[1];

  console.log(token);

  if (!token) {
    return res.status(401).json({msg: 'Acesso negado...'});
  }

  try {
    const secret = process.env.SECRET;
    jwt.verify(token, secret);
    next();
  } catch(error) {
    console.log(error);
    res.status(400).json({msg: 'Token Inválido'});
  }
}

// TODO: Criar Middleware para Admin

async function checkIfAdmin(req, res, next)  {
  const authHeader = req.headers['authorization'];

  if (!authHeader) return res.status(401).json({ error: 'No token provided' });

  const token = authHeader.split(' ')[1]; // Bearer <token>
  console.log("token", token);

  try {
    console.log("Verifying token...");
    console.log(process.env.SECRET);
    const decoded = jwt.verify(token, process.env.SECRET); // decode token
    console.log(decoded.id);
    const user = await userService.getUserById(decoded.id); // fetch user

    if (!user) return res.status(404).json({ error: 'User not found' });
    if (user.role != "admin") return res.status(404).json({ error: 'User not found' });

    next();
  } catch (err) {
    console.log("Invalid token")
    res.status(403).json({ error: 'Invalid token' });
  }
};