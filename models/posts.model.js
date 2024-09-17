import mongoose from "mongoose";

const postsSchema = new mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    titulo: { type: String, required: true },
    descricao: { type: String, required: true },
    conteudo: { type: String, required: true },
    thumb: { type: String, required: true },
  },
  { versionKey: false, timestamps: true }
);

const post = mongoose.model("posts", postsSchema);

export default post;
