import express from "express";
import LivroController from "../controllers/livroController.js";
import paginar from "../middlewares/paginar.js";

const routes = express.Router();
const route = `livros`;

routes
    .get(`/${route}`, LivroController.getAll, paginar)
    .get(`/${route}/buscar`, LivroController.getByParams, paginar)
    .get(`/${route}/:id`, LivroController.getById)
    .post(`/${route}`, LivroController.post)
    .put(`/${route}/:id`, LivroController.put)
    .delete(`/${route}/:id`, LivroController.delete);

export default routes;