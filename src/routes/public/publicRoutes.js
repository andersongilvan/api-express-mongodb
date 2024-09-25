import express from "express";
import {
  getAllPosts,
  getAllProjects,
} from "../../controller/public/postController.js";

const routes = express.Router();

routes.get("/posts/public", getAllPosts);
routes.get("/projects/public", getAllProjects);

export default routes;
