import express from "express";
import AutorController from "../controllers/autorController.js";

const routes = express.Router();
const route = `autores`;

routes
    .get(`/${route}`, AutorController.getAll)
    .get(`/${route}/:id`, AutorController.getById)
    .post(`/${route}`, AutorController.post)
    .put(`/${route}/:id`, AutorController.put)
    .delete(`/${route}/:id`, AutorController.delete);

export default routes;