import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    font-family: 'Heebo', sans-serif;  
}

  body {
    display: flex;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    background-color: #f2f2f2;
    font-size: 23px;  
  }

.acoes {
    cursor: pointer;
    color: white;
    background-color: #517694;
    padding: 5px;
    border-radius: 5px;
    margin-left: 5px; 
}

#delete {
  background-color: #8F0507;
}

.img_cover {
  border: 1.5mm solid #517694;
    border-radius: 10px; 
    box-shadow: 0 0 5px 2px darkgray;
}

}

`;


export default Global;