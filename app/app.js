import mongoose from 'mongoose';
import express from 'express';
import jwt from 'jsonwebtoken';

import dotenv from 'dotenv';
dotenv.config();

import userService from './services/userService.js';
import userRoutes from './routes/userRoutes.js';
import authRoutes from './routes/authRoutes.js';
import universidadeRoutes from './routes/universidadeRoutes.js';

const { Schema } = mongoose;
const app = express();
app.use(express.json());

import cors from 'cors';
app.use(cors());

const PORT = 4000;

// MongoDB connection
async function main() {

  

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
app.use('/universidades', universidadeRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

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
    console.log(user);

    if (!user) return res.status(404).json({ error: 'User not found' });
    if (user.role != "admin") return res.status(404).json({ error: 'User not found' });

    next();
  } catch (err) {
    console.log("Invalid token")
    res.status(403).json({ error: 'Invalid token' });
  }
};