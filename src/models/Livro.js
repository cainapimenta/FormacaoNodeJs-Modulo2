import mongoose from "mongoose";

const livroSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    titulo: {
        type: String,
        required: [true, "O título do livro é obrigatório"]
    },
    autor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "autores",
        required: [true, "O(a) autor(a) é obrigatório"]
    },
    editora: {
        type: String,
        required: [true, "A editora é obrigatória"],
        enum: {
            values: ["Casa do código", "Alura", "Classicos", "Moderno"],
            message: "A editora {VALUE} não é um valor valido."
        }
    },
    preco: { type: Number },
    paginas: {
        type: Number,
        min: [10, "O número de paginas deve estar entre 10 e 5000. Valor fornecido: {VALUE}"],
        max: [5000, "O número de paginas deve estar entre 10 e 5000. Valor fornecido: {VALUE}"]
    }

}, { versionKey: false });

const livro = mongoose.model("livros", livroSchema);

export default livro;