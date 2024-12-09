import express from "express";
import LivroController from "../controllers/livroController.js";

const routes = express.Router();
const route = `livros`;

routes.get(`/${route}`, LivroController.getAll);
routes.get(`/${route}/buscar`, LivroController.getByParams);
routes.get(`/${route}/:id`, LivroController.getById);
routes.post(`/${route}`, LivroController.post);
routes.put(`/${route}/:id`, LivroController.put);
routes.delete(`/${route}/:id`, LivroController.delete);

export default routes;