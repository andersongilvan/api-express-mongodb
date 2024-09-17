import express from "express"
import PostController from "../controller/postController.js"

const postRoutes = express.Router()

postRoutes.post("/posts", PostController.create)
postRoutes.get("/posts", PostController.getAll)
postRoutes.get("/posts/:id", PostController.getPostByID)
//postRoutes.get("/posts/:name", PostController.getPostByName)
postRoutes.put("/posts/:id", PostController.update)
postRoutes.delete("/posts/:id", PostController.delete)

export default postRoutes