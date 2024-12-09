import { autor } from "../models/Autor.js";

class AutorController{

    static async getAll(req, res) {
        try {
            const lista = await autor.find({});
            res.status(200).json(lista);
        } catch (error) {
            res
                .status(500)
                .json({ message: `${error.message} - falha na requisição` });
        }
    }

    static async getById(req, res){
        try {
            const result = await autor.findById(req.params.id);
            res.status(200).json(result);
        } catch (error) {
            res.status(500)
                .json({ message: `[Falha ao buscar autor] ${error.message}`})
        }
    }

    static async post(req, res){
        try {
            const entity = await autor.create(req.body);
            res.status(201).json(entity);
        } catch (error) {
            res.status(500)
                .json({ message: `${error.message} - falha ao cadastrar autor` });
        }
    }

    static async put(req, res){
        try {
            await autor.findByIdAndUpdate(req.params.id, req.body);
            res.status(204).send();
        } catch (error) {
            res.status(500)
                .json({ message: `[Falha ao atualizar o autor] ${error.message}`})
        }
    }

    static async delete(req, res){
        try {
            const id = req.params.id;
            await autor.findByIdAndDelete(id);
            res.status(204).send();
        } catch (error) {
            res.status(500)
                .json({ message: `[Falha ao deletar o autor] ${error.message}`})
        }
    }
};

export default AutorController;