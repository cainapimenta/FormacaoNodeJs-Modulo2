import mongoose from "mongoose";
import BaseError from "../errors/BaseError.js";
import RequisitionError from "../errors/RequisitionError.js";
import ValidationError from "../errors/ValidationError.js";

// eslint-disable-next-line no-unused-vars
function manipuladorError(error, req, res, next) {
    if (error instanceof mongoose.Error.CastError) {
        new RequisitionError().sendReponse(res);
    } else if (error instanceof mongoose.Error.ValidationError){
        new ValidationError(error).sendReponse(res);
    } else if (error instanceof BaseError) {
        error.sendReponse(res);
    } else {
        new BaseError().sendReponse(res);
    }
}

export default manipuladorError;