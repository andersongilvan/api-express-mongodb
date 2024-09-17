import mongoose from "mongoose";

const projetoSchema = new mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    titulo: { type: String, required: true },
    descricao: { type: String, required: true },
    link: { type: String, required: true },
    imagem: { type: String, required: true },
  },
  { versionKey: false, timestamps:true }
);

const projeto = mongoose.model("projetos", projetoSchema);

export default projeto;
