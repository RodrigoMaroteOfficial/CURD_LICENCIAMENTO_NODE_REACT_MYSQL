import express from "express";
import { 
    getSongs, 
    addSong, 
    updateSong, 
    deleteSong
} from "../controllers/music.js";

const router = express.Router();   //cria uma instância de um roteador. é uma instância independente que pode ser usado para definir rotas e middleware.

router.get("/", getSongs);  //quando uma solicitação GET é feita para '/', esta função será chamada para lidar com a  socicitação.

router.post("/", addSong); // add songs criadas

router.put("/:id", updateSong);

router.delete("/:id", deleteSong);


export default router; 

