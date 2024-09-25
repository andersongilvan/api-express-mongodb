import express from "express"
import projectsRoutes from "./private/projectRoutes.js"
import postRoutes from "./private/postRoutes.js"
import userRoutes from "./userRoutes.js"
import publiRoutes from "./public/publicRoutes.js"

function routes(app) {
    app.route("/").get((req, res) => res.status(200).send("API-EXPRESS JS"))
    app.use(express.json(),publiRoutes, projectsRoutes, postRoutes, userRoutes )
}
export default routes