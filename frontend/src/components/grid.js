import React from "react";
import axios from "axios";
import styled from "styled-components";
import { FaTrash, FaRegEdit, FaFileContract,  } from "react-icons/fa";
import { toast } from "react-toastify";
import "../styles/global";


const Table = styled.table`
  width: 1350px;
  background-color: #f4f4f4;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
  max-width: 100%;
  margin: 20px auto;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.8);
`;

export const Thead = styled.thead`
  border-bottom: inset;
  pointer-events: none;
`;

export const Tbody = styled.tbody`


`;



export const Tr = styled.tr`
display: flex;
justify-content: space-between;
border-bottom: 4px solid #ccc;
text-align: start;
align-items: center;
color: #666;


&:hover {
  background-color: rgba(81, 118, 148, 0.3); /* Darken the background on hover */
  font-weight: bold;
  color: #666;
  
  border-radius: 10px;
   transition: background-color 0.3s ease;
}

`;

export const Th = styled.th`
  width: 150px;
  padding-right: 10px;
  color: #555;
  font-weight: bold;
  
  
`;



export const Td = styled.td`
display: flex;
align-items: center;
justify-content: center;
padding-top: 10px;
padding-bottom: 10px;
padding-left: 35px;
text-align: center;
width: 150px; /* Set a fixed width for the column */
min-width: 0; /* Ensure content does not overflow */
  
`;

export const TdDate = styled.td`
display: flex;
align-items: center;
justify-content: center;
padding-top: 10px;
padding-bottom: 10px;
padding-left: 35px;
text-align: center;
width: 150px; /* Set a fixed width for the column */
min-width: 0; /* Ensure content does not overflow */


color: ${(props) => (props.isPastDate ? "red" : "#666")}; 
`;
//so muda a cor caso a propriedade seja true.




const Grid = ({ songs, setSongs, setOnEdit }) => {
  const handleEdit = (item) => {
    setOnEdit(item);

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = async (id) => {

    const isConfirmed = window.confirm("Tem certeza que você quer deletar?");

    if (!isConfirmed) {
      return;
    }

    try {
      const { data } = await axios.delete(`http://localhost:4400/${id}`);
      const newArray = songs.filter((song) => song.id !== id);
      setSongs(newArray);
      toast.success(data);


     // Reload na pagina
    window.location.reload();
  } catch (error) {
    toast.error(error.response.data);
  }

  setOnEdit(null);
  };

  const truncateText = (text, maxLength) => {
    return text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;
  };



 
/*
  const formatPublisher = (songName) => {
    const words = songName.split(' ');
  
    if (words.length >= 2) {
      const formattedText = words.map((word, index) => (
        <React.Fragment key={index}>
          {index > 0 && <br />}
          {word}
        </React.Fragment>
      ));
  
      return <React.Fragment>{formattedText}</React.Fragment>;
    }
  
    return songName;
  };*/


  const handleContratoClick = (url) => {
   
    window.open(url, "_blank");
  };


  const isPastDate = (dateString) => {
    const currentDate = new Date();
    const compareDate = new Date(dateString);
    return compareDate < currentDate;
  };




return (
  <Table>
    <Thead>
      <Tr>
        <Th id="idCapa">Capa</Th>
        <Th id="idMusica">Música</Th>
        <Th id="idArtista">Artista</Th>
        <Th>Editora</Th>
        <Th>Valido Até</Th>
        <Th>Ações</Th> 
      </Tr>
    </Thead>

    <Tbody>
        {songs.map((item, i) => (
          <React.Fragment key={i}>
            <Tr>
              <Td>
                {item.album_cover == "" ? (
                  <img
                    className="img_cover"
                    src={`https://upload.wikimedia.org/wikipedia/commons/b/b9/No_Cover.jpg`}
                    alt="album teste"
                    style={{ width: "160px", height: "auto" }}
                  />
                ) : (
                  <img
                    className="img_cover"
                    src={item.album_cover}
                    alt="album cover"
                    style={{ width: "160px", height: "auto" }}
                  />
                )}
                </Td>
            <Td style={{ margin: "0 1px 0 -50px" }}>
              {truncateText(item.song_name, 40)}
            </Td>
            <Td>
              {truncateText(item.artist, 40)}
            </Td>
            <Td>
            {(item.publisher)}
            </Td>
            <TdDate 
            isPastDate={isPastDate(item.expires)}
            >
              {item.expires}
              
              </TdDate>
            <Td>
              
            <FaFileContract 
            className="acoes" 
            onClick={() => handleContratoClick(item.contrato)}/>
            
            <FaRegEdit
                className="acoes"
                onClick={() => handleEdit(item)}
              />
              
              
              <FaTrash
                className="acoes" id="delete"
                onClick={() => handleDelete(item.id)}
              />
              
            </Td>
          </Tr>
        </React.Fragment>
      ))}
    </Tbody>
  </Table>
);
};

   

export default Grid;

