import mongoose from "mongoose";

mongoose.Schema.Types.String.set("validate", {
    validator: (valor) => valor !== "",
    message: (prop) => {
        return `Campo ${prop.path} não pode estar em branco`
    }
});