import Login from "pages/Login"; //importar desse jeito é possível por causa do arquivo jsconfig.json
import Feira from "pages/Feira"; //importar desse jeito é possível por causa do arquivo jsconfig.json
import Carrinho from "pages/Carrinho"; //importar desse jeito é possível por causa do arquivo jsconfig.json
import { UsuarioProvider } from "common/context/Usuario"; //importar desse jeito é possível por causa do arquivo jsconfig.json
import { CarrinhoProvider } from "common/context/Carrinho"; //importar desse jeito é possível por causa do arquivo jsconfig.json

import { BrowserRouter, Switch, Route } from "react-router-dom";

function Router() {

    return (
        <BrowserRouter>
            <Switch>
                <UsuarioProvider>

                    <Route exact path="/">
                        <Login />
                    </Route>
                    <CarrinhoProvider>
                        <Route path="/feira">
                            <Feira />
                        </Route>
                    </CarrinhoProvider>
                </UsuarioProvider>

                <Route path="/carrinho">
                    <Carrinho />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router;