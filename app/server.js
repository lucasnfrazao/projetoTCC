import mongoose from 'mongoose';
import express from 'express';
const { Schema } = mongoose;

const app = express();
const PORT = 3000;

// MongoDB connection
const mongoURI = process.env.MONGO_URI || 'mongodb://root:example@127.0.0.1:27017/mydatabase'

async function main() {
  await mongoose.connect(mongoURI)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err, 'Erro ao Conectar'));

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

main().catch(err => console.log(err));

const universidadeSchema = new Schema({
  nome: String,
  descricao: String,
  cidade: String,
  uf: String
});

const Universidade = mongoose.model('Universidade', universidadeSchema);

const pucRio = new Universidade({
  nome: "Pontifícia Universidade Católica do Rio de Janeiro",
  descricao: "Localizada na Zona Sul do Rio de Janeiro", 
  cidade: "Rio de Janeiro",
  uf: "RJ"
  });

//await pucRio.save();

//const firstArticle = await Universidade.findOne({});
//console.log(firstArticle);

app.get('/', (req, res) => {
  res.send('Hello from Node.js with MongoDB!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.get('/universidades', (req, res) => {
  mongoose.get()
  res.send('Lista de Universidades');
});

app.post('/universidades', async (req, res) => {
  try {
    // const pucRio = new Universidade({
    //   nome: "Pontifícia Universidade Católica do Rio de Janeiro",
    //   descricao: "Localizada na Zona Sul do Rio de Janeiro", 
    //   cidade: "Rio de Janeiro",
    //   uf: "RJ"
    //   });
    // await pucRio.save();
    res.send('Criei Universidade!');
  } catch(err) {
    console.log(err);
    res.send(`Erro ao criar universidade! + ${err}`);
  }
});