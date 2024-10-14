import express from "express";
import ProjectController from "../../controller/private/projectController.js";
import auth from "../../middlewares/auth.js";

const routes = express.Router();

routes.get("/projects", ProjectController.getAll);
routes.post("/projects", auth, ProjectController.create);
routes.get("/projects/:id", ProjectController.getByID);
routes.put("/projects/:id", auth, ProjectController.updatet);
routes.delete("/projects/:id", auth, ProjectController.delete);

export default routes;

