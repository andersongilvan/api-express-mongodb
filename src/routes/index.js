import express from "express"
import projetos from "./projetosRoutes.js"
import postRoutes from "./postRoutes.js"

function routes(app) {
    app.route("/").get((req, res) => res.status(200).send("API Nome JS"))
    app.use(express.json(), projetos, postRoutes)
}
export default routes