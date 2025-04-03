import mongoose from "mongoose";
const { Schema } = mongoose;

const vestibular = new Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
    titulo: String,
    datas: [{
        _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
        titulo: String,
        data: Date
    }]
})

export default vestibular;