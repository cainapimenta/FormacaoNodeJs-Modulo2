import express from "express";
import connectarDatabase from "./config/dbConnect.js";
import routes from "./routes/index.js";

const connection = await connectarDatabase();

connection.on("error", (erro) => {
    console.error("[Erro de conexão]", erro);
});

connection.once("open", () => {
    console.log("Conexão com o banco feita com sucesso");
});

const app = express();
routes(app);

export default app;
