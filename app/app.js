import mongoose from 'mongoose';
import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { EJSON } from 'bson';

import { fileURLToPath } from 'url';
import { dirname } from 'path';

import dotenv from 'dotenv';
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import userRoutes from './routes/userRoutes.js';
import authRoutes from './routes/authRoutes.js';
import universidadeRoutes from './routes/universidadeRoutes.js';

import universidadeService from './models/Universidade.js';
import userService from './models/User.js';

const { Schema } = mongoose;
const app = express();
app.use(express.json());
app.use(cors());


const PORT = 4000;

// MongoDB connection
async function main() {

  const mongoURI = process.env.MONGO_URI;

  await mongoose.connect(mongoURI)
    .then(async () => {
      console.log('MongoDB Connected')

      const universidadeCount = await universidadeService.Universidade.countDocuments();
      const userCount = await userService.User.countDocuments();

      if (universidadeCount === 0) {
        const universidadeData = normalizeIds(EJSON.parse(
          fs.readFileSync(path.join(__dirname, 'universidades.json'), 'utf8')
        ))

         await universidadeService.Universidade.collection.insertMany(universidadeData)

         console.log("Dados de universidade carregados!")
      }

      if (userCount === 0) {
        const userData = normalizeIds(EJSON.parse(
          fs.readFileSync(path.join(__dirname, 'users.json'), 'utf8')
        ))

         await userService.User.collection.insertMany(userData)

         console.log("Dados do usuário carregados!")
      }

    })
    .catch(err => console.log(err, 'Erro ao Conectar'));
}

function normalizeIds(docs) {
  return docs.map(doc => {
    if (doc._id && typeof doc._id === 'object' && '$oid' in doc._id) {
      doc._id = new ObjectId(doc._id.$oid);
    }
    return doc;
  });
}

main().catch(err => console.log(err));

app.use('/user', userRoutes);
app.use('/auth', authRoutes);
app.use('/universidades', universidadeRoutes);

app.listen(PORT, '0.0.0.0');
