import NotFound from "../errors/NotFound.js";
import { autores, livros } from "../models/index.js";

class LivroController {

    static getAll = async (req, res, next) => {
        try {
            const findLivros = livros.find();

            req.result = findLivros;

            next();
        } catch (error) {
            next(error);
        }
    }

    static getById = async (req, res, next) => {
        try {
            const result = await livros.findById(req.params.id);

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
            const entity = await livros.create(body);
            res.status(201).json(entity);
        } catch (error) {
            next(error);
        }
    }

    static put = async (req, res, next) => {
        try {
            const result = await livros.findByIdAndUpdate(req.params.id, req.body);

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
            const result = await livros.findByIdAndDelete(id);

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

        try {
            const buscador = await processSearch(req.query);

            if (buscador !== null) {
                const entities = livros.find(buscador);

                req.result = entities;
                next();
            } else {
                res.status(200).json([]);
            }
        } catch (error) {
            next(error);
        }
    }
};

async function processSearch(params) {
    const { editora, titulo, minPaginas, maxPaginas, nomeAutor } = params;
    let buscador = {};

    if (minPaginas || maxPaginas) buscador.paginas = {};

    if (editora) buscador.editora = { $regex: editora, $options: "i" };
    if (titulo) buscador.titulo = { $regex: titulo, $options: "i" };

    if (minPaginas) buscador.paginas.$gte = minPaginas;
    if (maxPaginas) buscador.paginas.$lte = maxPaginas;

    if (nomeAutor) {
        const autor = await autores.findOne({ nome: nomeAutor });

        if (autor !== null) {
            buscador.autor = autor._id;
        } else {
            buscador = null;
        }
    }

    return buscador;
}

export default LivroController;