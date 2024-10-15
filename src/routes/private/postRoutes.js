import express from "express";
import PostController from "../../controller/private/postController.js";
import auth from "../../middlewares/auth.js";

const postRoutes = express.Router();

postRoutes.post("/posts", auth, PostController.create);
postRoutes.get("/posts", auth, PostController.get);
postRoutes.get("/posts/:id", PostController.getPostByID);
//postRoutes.get("/posts/:name", PostController.getPostByName)
postRoutes.put("/posts/:id", auth, PostController.update);
postRoutes.delete("/posts/:id", auth, PostController.delete);

export default postRoutes;
