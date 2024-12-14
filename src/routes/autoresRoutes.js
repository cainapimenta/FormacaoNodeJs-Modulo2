import express from "express";
import AutorController from "../controllers/autorController.js";
import paginar from "../middlewares/paginar.js";

const routes = express.Router();
const route = `autores`;

routes
    .get(`/${route}`, AutorController.getAll, paginar)
    .get(`/${route}/:id`, AutorController.getById)
    .post(`/${route}`, AutorController.post)
    .put(`/${route}/:id`, AutorController.put)
    .delete(`/${route}/:id`, AutorController.delete);

export default routes;