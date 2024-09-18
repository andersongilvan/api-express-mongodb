import mongoose from "mongoose";

function errorHandler(erro, req, res, next) {
  if (erro instanceof mongoose.Error.CastError) {
    res.status(400).json({ message: "Um ou mais dados estão incorretos" });
  } else if (erro instanceof mongoose.Error.ValidationError) {
    const msgErro = Object.values(erro.errors)
      .map((e) => e.message)
      .join("; ");
    res.status(400).json({ message: `Erro de validação -> ${msgErro}` });
  } else {
    res.status(500).json({ message: "Erro interno do servidor" });
  }
}

export default errorHandler;
