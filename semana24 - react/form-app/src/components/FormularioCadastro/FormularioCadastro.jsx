import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import DadosEntrega from "./DadosEntrega";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";


function FormularioCadastro({ aoEnviar, validarCPF }) {

    const [etapaAtual, setEtapaAtual] = useState(0);
    const [dadosColetados, setDados] = useState({});

    useEffect(()=>{
        console.log(dadosColetados);
    })


    const formularios = [
        <DadosUsuario aoEnviar={coletarDados} />,
        <DadosPessoais aoEnviar={coletarDados} validarCPF={validarCPF} />,
        <DadosEntrega aoEnviar={coletarDados} />
    ];

    function coletarDados(dados){
        setDados({...dadosColetados,...dados});
        proximo();
    }

    function proximo() {
        setEtapaAtual(etapaAtual + 1);
    }
   

    return (
        <> {/* This is a shorter syntax you can use for declaring react fragments. It looks like empty tags */}
            {formularios[etapaAtual]}
        </>
    )
}



export default FormularioCadastro;