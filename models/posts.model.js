import mongoose from "mongoose";

const postsSchema = new mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    titulo: { type: String, required: [true, "O campo TITULO é obrigatório"] },
    descricao: {
      type: String,
      required: [true, "O campo DESCRIÇÃO é obrigatória"],
    },
    conteudo: {
      type: String,
      required: [true, "O campo CONTEÚDO é obrigatória"],
    },
    thumb: { type: String, required: [true, "O campo THUMB é obrigatória"] },
  },
  { versionKey: false, timestamps: true }
);

const post = mongoose.model("posts", postsSchema);

export default post;
