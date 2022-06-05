import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import {temaClaro, temaEscuro} from './Components/UI/temas';

import Cabecalho from "./Components/Cabecalho";
import Container from "./Components/Container";
import {GlobalStyle} from './Components/GlobalStyle';
import { BtnTema } from "./Components/UI";
import TrocaTema from "./Components/TrocaTema";

function App() {

  const [tema, setTema] = useState(true);

  const toggleTema = ()=> {
    setTema((tema)=>!tema);
  }
  return (
    <ThemeProvider theme={tema ? temaClaro : temaEscuro}>
      <GlobalStyle/>


      <Cabecalho />

      <Container />
      <BtnTema onClick={toggleTema}>
        <TrocaTema tema={tema}/>
      </BtnTema>
    </ThemeProvider>
  );
}

export default App;
