import express from "express";
import songRoutes from "./routes/allMusic.js"; //está importando as definições exportadas do módulo allMusic.js para o módulo atual, onde podemos usar as funcionalidades definidas. 
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors()); //evitar conflitos locais

app.use("/", songRoutes) //no caminho inicial, pegue esta rota

app.listen(4400); 


