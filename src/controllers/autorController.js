import NotFound from "../errors/NotFound.js";
import { autores } from "../models/index.js";

class AutorController {

    static getAll = async (req, res, next) => {
        try {
            const lista = await autores.find({});
            res.status(200).json(lista);
        } catch (error) {
            next(error);
        }
    }

    static getById = async (req, res, next) => {
        try {
            const result = await autores.findById(req.params.id);

            if (result !== null) {
                res.status(200).json(result);
            }
            else {
                next(new NotFound("Id do Autor não localizado."));
            }

        } catch (error) {
            next(error);
        }
    }

    static post = async (req, res, next) => {
        try {
            const entity = await autores.create(req.body);

            res.status(201).json(entity);
        } catch (error) {
            next(error);
        }
    }

    static put = async (req, res, next) => {
        try {
            const result = await autores.findByIdAndUpdate(req.params.id, req.body);

            if (result === null) {
                next(new NotFound("Autor não localizado."));
            } else {
                res.status(204).send();
            }
        } catch (error) {
            next(error);
        }
    }

    static delete = async (req, res, next) => {
        try {
            const id = req.params.id;
            const result = await autores.findByIdAndDelete(id);

            if (result === null) {
                next(new NotFound("Autor não localizado."));
            } else {
                res.status(204).send();
            }
        } catch (error) {
            next(error);
        }
    }
};

export default AutorController;