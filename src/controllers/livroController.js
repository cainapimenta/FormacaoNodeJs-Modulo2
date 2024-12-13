import NotFound from "../errors/NotFound.js";
import livro from "../models/Livro.js";

class LivroController {

    static getAll = async (req, res, next) => {
        try {
            const entites = await livro.find({}).populate("autor").exec();
            res.status(200).json(entites);
        } catch (error) {
            next(error);
        }
    }

    static getById = async (req, res, next) => {
        try {
            const result = await livro.findById(req.params.id)
                .populate("autor")
                .exec();

            if (result === null) {
                next(new NotFound("Id do Livro não localizado."));
            }
            else {
                res.status(200).json(result);
            }
        } catch (error) {
            next(error);
        }
    }

    static post = async (req, res, next) => {
        const body = req.body;

        try {
            const entity = await livro.create(body);
            res.status(201).json(entity);
        } catch (error) {
            next(error);
        }
    }

    static put = async (req, res, next) => {
        try {
            const result = await livro.findByIdAndUpdate(req.params.id, req.body);

            if (result === null) {
                next(new NotFound("Livro não encontrado"));
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
            const result = await livro.findByIdAndDelete(id);

            if (result === null) {
                next(new NotFound("Livro não encontrado"));
            } else {
                res.status(204).send();
            }
        } catch (error) {
            next(error);
        }
    }

    static getByParams = async (req, res, next) => {
        const queries = req.query;

        try {
            const entites = await livro.find(queries)
                .populate("autor")
                .exec();

            res.status(200).json(entites);
        } catch (error) {
            next(error);
        }
    }
};

export default LivroController;