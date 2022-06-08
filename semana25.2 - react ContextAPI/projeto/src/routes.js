import Login from "pages/Login"; //importar desse jeito é possível por causa do arquivo jsconfig.json
import Feira from "pages/Feira"; //importar desse jeito é possível por causa do arquivo jsconfig.json
import Carrinho from "pages/Carrinho"; //importar desse jeito é possível por causa do arquivo jsconfig.json
import { UsuarioContext } from "common/context/Usuario"; //importar desse jeito é possível por causa do arquivo jsconfig.json
import { useState } from 'react';

import { BrowserRouter, Switch, Route } from "react-router-dom";

function Router() {
    const [nome, setNome] = useState("");
    const [saldo, setSaldo] = useState(0);
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <UsuarioContext.Provider value={{nome, setNome, saldo, setSaldo}}>
                        <Login />
                    </UsuarioContext.Provider>
                </Route>
                <Route path="/feira">
                    <Feira />
                </Route>
                <Route path="/carrinho">
                    <Carrinho />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router;