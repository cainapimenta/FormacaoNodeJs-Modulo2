import BaseError from "./BaseError.js";

class RequisitionError extends BaseError {
    constructor(message = "Um ou mais dados fornecidos estão incorretos", status = 400) {
        super(message, status);
    }
};

export default RequisitionError;