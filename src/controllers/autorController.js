import mongoose from "mongoose";
import { autor } from "../models/Autor.js";

class AutorController {

    static getAll = async (req, res) => {
        try {
            const lista = await autor.find({});
            res.status(200).json(lista);
        } catch (error) {
            res
                .status(500)
                .json({ message: `${error.message} - falha na requisição` });
        }
    }

    static getById = async (req, res) => {
        try {
            const result = await autor.findById(req.params.id);

            if (result !== null) {
                res.status(200).json(result);
            }
            else {
                res.status(404).json({ message: "Id do Autor não localizado." });
            }

        } catch (error) {

            if (error instanceof mongoose.Error.CastError) {
                res.status(400)
                    .json({ message: "Um ou mais dados fornecidos estão incorretos." });
            }
            else {
                res.status(500)
                    .json({ message: `[Falha ao buscar autor] ${error.message}` })
            }
        }
    }

    static post = async (req, res) => {
        try {
            const entity = await autor.create(req.body);
            res.status(201).json(entity);
        } catch (error) {
            res.status(500)
                .json({ message: `${error.message} - falha ao cadastrar autor` });
        }
    }

    static put = async (req, res) => {
        try {
            await autor.findByIdAndUpdate(req.params.id, req.body);
            res.status(204).send();
        } catch (error) {
            res.status(500)
                .json({ message: `[Falha ao atualizar o autor] ${error.message}` })
        }
    }

    static delete = async (req, res) => {
        try {
            const id = req.params.id;
            await autor.findByIdAndDelete(id);
            res.status(204).send();
        } catch (error) {
            res.status(500)
                .json({ message: `[Falha ao deletar o autor] ${error.message}` })
        }
    }
};

export default AutorController;