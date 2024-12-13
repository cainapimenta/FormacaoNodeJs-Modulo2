import BaseError from "./BaseError.js";

class NotFound extends BaseError {
    constructor(message = "Pagina não encontra") {
        super(message, 404);
    }
};

export default NotFound;