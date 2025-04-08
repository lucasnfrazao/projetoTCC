import mongoose from 'mongoose';
const { Schema } = mongoose;

const cursoSchema = new Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
    nome: { type: String, required: true }
});

export default cursoSchema;