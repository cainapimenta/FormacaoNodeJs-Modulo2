import { autor } from "../models/Autor.js";

class AutorController {

    static getAll = async (req, res, next) => {
        try {
            const lista = await autor.find({});
            res.status(200).json(lista);
        } catch (error) {
            next(error);
        }
    }

    static getById = async (req, res, next) => {
        try {
            const result = await autor.findById(req.params.id);

            if (result !== null) {
                res.status(200).json(result);
            }
            else {
                res.status(404).json({ message: "Id do Autor não localizado." });
            }

        } catch (error) {
            next(error);
        }
    }

    static post = async (req, res, next) => {
        try {
            
            const entity = await autor.create(req.body);

            res.status(201).json(entity);
        } catch (error) {
            next(error);
        }
    }

    static put = async (req, res, next) => {
        try {
            await autor.findByIdAndUpdate(req.params.id, req.body);
            res.status(204).send();
        } catch (error) {
            next(error);
        }
    }

    static delete = async (req, res, next) => {
        try {
            const id = req.params.id;
            await autor.findByIdAndDelete(id);
            res.status(204).send();
        } catch (error) {
            next(error);
        }
    }
};

export default AutorController;