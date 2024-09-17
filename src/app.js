import express from "express";
import conectaNaDb from "../config/db.connection.js";
import routes from "./routes/index.js";

const conexao = await conectaNaDb();

conexao.on("error", (erro) => {
  console.error("Erro de conexão => ", erro);
});

conexao.once("open", () => {
  console.log("Conectou");
});

const app = express();

routes(app);

export default app;
