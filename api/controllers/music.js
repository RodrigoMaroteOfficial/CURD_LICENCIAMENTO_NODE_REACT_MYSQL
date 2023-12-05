import { db } from "../db.js";

export const getSongs = (_, res) => {
  const q = "SELECT * FROM musicas";

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

//todos os dados que queremos add ficam no corpo do pedido POST
export const addSong = (req, res) => {
  const q =
    "INSERT INTO musicas (`song_name`, `artist`, `publisher`, `expires`, `album_cover`, `contrato`) VALUES (?)";

  const values = [
    req.body.song_name,
    req.body.artist,
    req.body.publisher,
    req.body.expires,
    req.body.album_cover,
    req.body.contrato
  ];

    console.log("Dados da Música Recebidos:", values);

  db.query(q, [values], (err) => {
    if (err) {
      console.log("Erro ao Adicionar Música:", err); 
      return res.status(500).json(`Erro ao Adicionar Musica: ${err.message}`);
    }

    return res.status(200).json("Musica adicionada com sucesso.");
  });
};

//atualiza os dados da musica baseado no ID com o metodo PUT
export const updateSong = (req, res) => {
  const q =
    "UPDATE musicas SET `song_name` = ?, `artist` = ?, `publisher` = ?, `expires` = ?, `album_cover` = ?, `contrato` = ? WHERE `id` = ?";

  const values = [
    req.body.song_name,
    req.body.artist,
    req.body.publisher,
    req.body.expires,
    req.body.album_cover,
    req.body.contrato
];

  db.query(q, [...values, req.params.id], (err) => { //spread pra arrays não ficariam dentro de arrays
    if (err) {
      console.log("Erro ao atualizar musica:", err);
      return res.status(500).json("Erro ao atualizar musica.");
    }

    return res.status(200).json("Musica atualizada.");
  });
};

export const deleteSong = (req, res) => {
  const q = "DELETE FROM musicas WHERE `id` = ?";

  db.query(q, [req.params.id], (err) => {
    if (err) {
      console.log("Erro ao excluir musica:", err);
      return res.status(500).json("Erro ao excluir musica.");
    }

    return res.status(200).json("Musica excluída com sucesso.");
  });
};
