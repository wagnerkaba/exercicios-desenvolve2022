import { Step, StepLabel, Stepper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import DadosEntrega from "./DadosEntrega";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";


function FormularioCadastro({ aoEnviar, validacoes }) {

    const [etapaAtual, setEtapaAtual] = useState(0);
    const [dadosColetados, setDados] = useState({});

    useEffect(()=>{
        console.log("Formularios.length = " + formularios.length);
        console.log("etapaAtual = " + etapaAtual );

        if(etapaAtual === formularios.length-1){
            //formularios é um array com 4 elementos e o último elemento é a página de agradecimento
            //para os dados serem enviados antes do agradecimento, é preciso deixar (etapaAtual === formularios.length - 1)
            aoEnviar(dadosColetados);
        }
    })


    const formularios = [
        <DadosUsuario aoEnviar={coletarDados} validacoes={validacoes}/>,
        <DadosPessoais aoEnviar={coletarDados} validacoes={validacoes} />,
        <DadosEntrega aoEnviar={coletarDados} validacoes={validacoes}/>,
        <Typography variant="h5">Obrigado pelo cadastro!</Typography>
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
            <Stepper activeStep={etapaAtual}>
                <Step><StepLabel>Login</StepLabel></Step>
                <Step><StepLabel>Pessoal</StepLabel></Step>
                <Step><StepLabel>Entrega</StepLabel></Step>
                <Step><StepLabel>Finalização</StepLabel></Step>


            </Stepper>
            {formularios[etapaAtual]}
        </>
    )
}



export default FormularioCadastro;