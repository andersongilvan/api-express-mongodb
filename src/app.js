import express from "express";
import conectaNaDb from "./config/db.connection.js";
import routes from "./routes/index.js";
import cors from "cors";
import errorHandler from "./middlewares/errorHandler.js";

const conexao = await conectaNaDb();

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
