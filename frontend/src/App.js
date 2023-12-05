import GlobalStyle from "./styles/global";
import styled from "styled-components";
import Form from "./components/form.js";
import Grid from "./components/grid";
import {useEffect, useState} from "react";
import {toast, ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";


//styled components e os templates literal

const Container = styled.div`
width: 100%;
min-width: 600px;
margin-top: 20px;
display: flex
flex-direction: column;
align-items: center;
gap: 10px;
background-image: linear-gradient(
  to bottom right,
  #4a6670,
  #37505c,
  #37505c,
  #2b3c49
);

padding: 20px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 1.0);
  border-radius: 10px;
`;

const Title = styled.h2`
color: #fff;
text-align: center`;

const SubTitle = styled.h5`
color: #fff;
display: inline`;


const FilterSelect = styled.select`
margin-top: 10px;
margin-left: 7px;
padding: 8px;
font-size: 16px;
border: 1px solid #ccc;
border-radius: 4px;
background-color: #fff;
color: #333;
cursor: pointer;

&:focus {
  outline: none;
  border-color: #007bff;
}`;

const Pagination = styled.h5`
float: right;
padding-top: 20px;
color: #fff;
display: inline;`;

const PageNumber = styled.span`
  cursor: pointer;
  margin-left: 5px;
  font-weight: normal;

  font-weight: ${({ active }) => (active ? 'bold' : 'normal')};
  color: ${({ active }) => (active ? '#fff' : '#888')};

  &:hover {
    text-decoration: underline;
  }
`;


function App() {

//hook pra gerenciar 3:
const [songs, setSongs] = useState([]); //armazenar músicas que são alteradas.
const [onEdit, setOnEdit] = useState(null); //ela esta sendo editada no momento? Inicialmente = null
const [filter, setFilter] = useState("Musica"); //filtro inicial de musica sempre vai ser a ordem alfabetica 



 const [currentPage, setCurrentPage] = useState(1); //1 pois é a página atual de musica
 const songsPerPage = 10;

  const totalPages = Math.ceil(songs.length / songsPerPage); //calcula o número total de páginas para exibir tudo. ceil arredonda.

  // musicas da pagina atual => saber qual a primeira e qual a ultima
  const indexOfLastSong = currentPage * songsPerPage;
  const indexOfFirstSong = indexOfLastSong - songsPerPage;
  const currentSongs = songs.slice(indexOfFirstSong, indexOfLastSong); //divide o array de musicas em parte



const handleFilterChange = (event) => {
  setFilter(event.target.value);
};



const getSongs = async () => { //esperar o banco retornar os dados
  try {
    const res = await axios.get("http://localhost:4400"); //esperar o axios fazero get no localhost. res contem os dados do server
    let sortedSongs;
    if (filter === "Musica") {
      sortedSongs = res.data.sort((a, b) =>
      a.song_name > b.song_name ? 1 : -1)
      
    } else if (filter === "Artista"){
      sortedSongs = res.data.sort((a, b) => (a.artist > b.artist ? 1 : -1));
    } else {
      sortedSongs = res.data.sort((a, b) =>
        new Date(a.expires) > new Date(b.expires) ? 1 : -1);
    }


    setSongs(sortedSongs);
  } catch (error) {
    toast.error(error);
  }
};


  useEffect(() => { //chama a funcao
    getSongs();   //funcao getSongs chamada sempre que o valor de filter mudar.
    }, [filter]); //a dependencia define o efeito que vai estar ativo


    
  return (
  <>
    <Container>
      <Title>MÚSICAS LICENCIADAS</Title>
      
      <Form onEdit = {onEdit} setOnEdit = {setOnEdit} getSongs = {getSongs}/>  {/*/componente form vai receber as propriedades que definimos*/}

      <SubTitle>ORDENAÇÃO</SubTitle>
      <FilterSelect name="filter" onChange={handleFilterChange} value={filter}> {/*controlado pelo filter, onChange ocorre só quando muda*/}
          <option value="Musica">Música</option>
          <option value="Artista">Artista</option>
          <option value="Expira">Validez</option>
        </FilterSelect>

     


        <Pagination>PÁGINA
          {Array.from({ length: totalPages }, (_, index) => (
            <PageNumber
              key={index + 1}
              onClick={() => setCurrentPage(index + 1)}
              active={index + 1 === currentPage}
            >
              {index + 1}
            </PageNumber>
          ))}
        </Pagination>

        

      <Grid songs = {currentSongs} setSongs = {setSongs} setOnEdit = {setOnEdit}/> {/*mostra o grid de musicas com as propriedades*/}
      

    
    </Container>

    <ToastContainer autoclose={3000} position={toast.POSITION.BOTTOM_LEFT} />
    <GlobalStyle />
 </>
  );
}

export default App;
