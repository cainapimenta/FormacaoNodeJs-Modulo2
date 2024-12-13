import mongoose from "mongoose";

// eslint-disable-next-line no-unused-vars
function manipuladorError(error, req, res, next) {
    if (error instanceof mongoose.Error.CastError) {
        res.status(400)
            .json({ message: "Um ou mais dados fornecidos estão incorretos." });
    }
    else if (error instanceof mongoose.Error.ValidationError){
        const errorMessages = Object.values(error.errors)
                                    .map(erro => erro.message)
                                    .join("; ");
        
        res.status(400)
            .json({ message: `Os seguintes erros foram encontrados: ${errorMessages}` });
    } else {
        res.status(500)
            .json({ message: error.message })
    }
}

export default manipuladorError;