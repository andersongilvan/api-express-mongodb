import express from "express";
import ProjetosController from "../controller/projetoSontroller.js";

const routes = express.Router();

routes.get("/projetos", ProjetosController.listar);
routes.post("/projetos", ProjetosController.cadastrar);
routes.get("/projetos/:id", ProjetosController.listarPorID);
routes.put("/projetos/:id", ProjetosController.atualizar);
routes.delete("/projetos/:id", ProjetosController.deletarProjeto)

export default routes;

// mongodb+srv://root:<db_password>@cluster0.mdh66.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
