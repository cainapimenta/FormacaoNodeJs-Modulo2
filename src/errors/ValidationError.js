import RequisitionError from "./RequisitionError.js";

class ValidationError extends RequisitionError {
    constructor(error){
        const errorMessages = Object.values(error.errors)
                                    .map(erro => erro.message)
                                    .join("; ");

        super(`Os seguintes erros foram encontrados: ${errorMessages}`)
    }
};

export default ValidationError;