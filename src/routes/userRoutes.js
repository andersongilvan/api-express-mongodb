import express from "express";
import UserController from "../controller/public/userController.js";

const routes = express.Router();

// routes.post("/user", UserController.create);
routes.post("/user/login", UserController.login);

export default routes;
