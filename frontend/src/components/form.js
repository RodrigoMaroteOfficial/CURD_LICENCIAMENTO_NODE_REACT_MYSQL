import axios from "axios";
import React, { useEffect, useRef} from "react";
import styled from "styled-components";
import {toast} from "react-toastify";

const FormContainer = styled.form`
display: flex;
align-items: flex-end;
gap: 10px;
flex-wrap: wrap;
background-color: #f4f4f4;
padding: 20px;
box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.7);
border-radius: 8px;
`;

const InputArea = styled.div`
display: flex;
flex-direction: column;
width: 190px;
flex: 1
`;

const SelectArea = styled.select`
display: flex;
flex-direction: column;
padding: 7.5px;
font-size: 16px;
border: 1px solid #bbb;
border-radius: 4px;
background-color: #fff;
color: #333;
cursor: pointer;
  

  &:focus {
    outline: none;
    border-color: #3A535F;
  }`;




const Input = styled.input`
padding: 0 10px;
border: 1px solid #bbb;
border-radius: 5px;
height: 40px;
font-size: 16px;


`;



const Label = styled.label`
text-align: center;
color: #444;`;


const Button = styled.button`
padding: 10px;
cursor: pointer;
border-radius: 5px;
border: none;
background-color: #517694;
color: white;
height: 42px;

`;


const Form = ({ getSongs, onEdit, setOnEdit }) => {
    const ref = useRef(); //criar uma referencia pra interagir com o DOM

    useEffect(() => { //clica em editar, as informações vão pro form
        if (onEdit) {
            const song = ref.current;

            song.song_name.value = onEdit.song_name;
            song.artist.value = onEdit.artist;
            song.publisher.value = onEdit.publisher;
            song.album_cover.value = onEdit.album_cover;
            song.expires.value = onEdit.expires;
            song.contrato.value = onEdit.contrato;
        }
    }, [onEdit]);

    const handleSubmit = async (e) => {
        e.preventDefault();  //previne a maneira padrão que o form se comporta. Vamos usar o toast e manipular manualmente os dados do formulário sem atualizar a pagina

        const song = ref.current;
//if pro submit validar
        if (
            !song.song_name.value ||
            !song.artist.value ||
            !song.publisher.value ||
            !song.expires.value ||
            !song.contrato.value
        ) {
            return toast.warn("Preencha Todos os Campos!");
        }



        if (onEdit) { //Se estiver editando
            await axios
                .put(`http://localhost:4400/${onEdit.id}`, { //informacao que vai pro banco quando envia o editado pela requisição put
                    song_name: song.song_name.value,
                    artist: song.artist.value,
                    publisher: song.publisher.value,
                    album_cover: song.album_cover.value,
                    expires: song.expires.value,
                    contrato: song.contrato.value,
                })
                .then(({ data }) => toast.success(data))
                .catch(({ data }) => toast.error(data));

        } else { //se o modo edição for falso
            await axios
                .post("http://localhost:4400/", { //requisiçao post envia novos dados
                    song_name: song.song_name.value,
                    artist: song.artist.value,
                    publisher: song.publisher.value,
                    album_cover: song.album_cover.value,
                    expires: song.expires.value,
                    contrato: song.contrato.value,
                    
                })
                .then(({ data }) => toast.success(data))
                .catch(({ data }) => toast.error(data));
        }

        //o que aparece depois que envia (campo limpado)
        song.song_name.value = "";
        song.artist.value = "";
        song.publisher.value = "";
        song.album_cover.value = "";
        song.expires.value = "";
        song.contrato.value = "";

        setOnEdit(null);
        getSongs();
    };

    return (
        <FormContainer ref={ref} onSubmit={handleSubmit}> {/* ref pra acessar o elemento DOM*/}
            <InputArea>
                <Label for="labelMusica">Música</Label>
                <Input name="song_name" id="labelMusica" />
            </InputArea>

            <InputArea>
                <Label for="labelArtista">Artista</Label>
                <Input name="artist" id="labelArtista"/>
            </InputArea>

            <InputArea>
                <Label for="labelCapa">Capa</Label>
                <Input name="album_cover" id="labelCapa"/>
            </InputArea>

            <InputArea>
                <Label for="labelContrato">Contrato</Label>
                <Input name="contrato" id="labelContrato" />
            </InputArea>

            <InputArea>
                <Label for="labelExpira">Expira</Label>
                <Input name="expires" type="date" id="labelExpira"/>
            </InputArea>
            
            <InputArea>
                <Label for="labelEditora">Editora</Label>
                <SelectArea name="publisher" id="labelEditora" required>
                <option value="" selected>Selecione a Editora</option>
                <option value="Atlantic Records">Atlantic Records</option>
                <option value="Columbia Records">Columbia Records</option>
                    <option value="Sony Music">Sony Music</option>
                    <option value="Universal Music">Universal Music</option>
                    <option value="Warner Music">Warner Music</option>
                     
                </SelectArea> 
                </InputArea>

            <Button type="submit">Salvar</Button>
         
        </FormContainer>
        
    );
};

export default Form;