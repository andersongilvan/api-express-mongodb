import express from "express";

import routes from "./routes/index.js";
import cors from "cors";
import errorHandler from "./middlewares/errorHandler.js";
import dbConnection from "../config/dbConnection.js"; // Confirme se o nome está correto e se a capitalização está adequada


const conexao = await dbConnection();

conexao.on("error", (erro) => {
  console.error("Erro de conexão => ", erro);
});

conexao.once("open", () => {
  console.log("Conectou");
});

const app = express();
app.use(cors());
routes(app);

app.use(errorHandler);

export default app;
