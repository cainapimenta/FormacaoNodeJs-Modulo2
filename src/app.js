import express from "express";
import connectarDatabase from "./config/dbConnect.js";
import routes from "./routes/index.js";
import manipuladorError from "./middlewares/manipuladorErros.js";

const connection = await connectarDatabase();

connection.on("error", (erro) => {
    console.error("[Erro de conexão]", erro);
});

connection.once("open", () => {
    console.log("Conexão com o banco feita com sucesso");
});

const app = express();
app.use(express.json());
routes(app);

app.use(manipuladorError);

export default app;
