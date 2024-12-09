import { autor } from "../models/Autor.js";
import livro from "../models/Livro.js";

class LivroController{

    static async getAll(req, res) {
        try {
            const entites = await livro.find({}).populate("autor").exec();
            res.status(200).json(entites);
        } catch (error) {
            res
                .status(500)
                .json({ message: `${error.message} - falha na requisição` });
        }
    }

    static async getById(req, res){
        try {
            const result = await livro.findById(req.params.id);
            res.status(200).json(result);
        } catch (error) {
            res.status(500)
                .json({ message: `[Falha ao buscar livro] ${error.message}`})
        }
    }

    static async post(req, res){
        const body = req.body;

        try {
            const entity = await livro.create(body);
            res.status(201).json(entity);
        } catch (error) {
            res.status(500)
                .json({ message: `${error.message} - falha ao cadastrar livro` });
        }
    }

    static async put(req, res){
        try {
            const result = await livro.findByIdAndUpdate(req.params.id, req.body);
            res.status(204).send();
        } catch (error) {
            res.status(500)
                .json({ message: `[Falha ao atualizar o livro] ${error.message}`})
        }
    }

    static async delete(req, res){
        try {
            const id = req.params.id;
            await livro.findByIdAndDelete(id);
            res.status(204).send();
        } catch (error) {
            res.status(500)
                .json({ message: `[Falha ao deletar o livro] ${error.message}`})
        }
    }

    static async getByParams(req, res){
        const queries = req.query;

        try {
            const entites = await livro.find(queries);
            res.status(200).json(entites);
        } catch (error) {
            res
                .status(500)
                .json({ message: `${error.message} - falha na requisição` });
        }
    }
};

export default LivroController;