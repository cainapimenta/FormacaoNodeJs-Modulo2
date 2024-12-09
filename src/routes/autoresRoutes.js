import express from "express";
import AutorController from "../controllers/autorController.js";

const routes = express.Router();
const route = `autores`;

routes.get(`/${route}`, AutorController.getAll);
routes.get(`/${route}/:id`, AutorController.getById);
routes.post(`/${route}`, AutorController.post);
routes.put(`/${route}/:id`, AutorController.put);
routes.delete(`/${route}/:id`, AutorController.delete);

export default routes;