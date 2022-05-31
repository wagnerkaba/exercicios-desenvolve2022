import React from 'react';
import './assets/css/base/base.css';
import Home from './paginas/Home';
import Sobre from './paginas/Sobre';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Pagina404 from './paginas/Pagina404';
import Cabecalho from './components/Cabecalho';
import Post from './paginas/Post';
import Categoria from './paginas/Categorias';

function App() {

  return (
    <>
      <BrowserRouter>
        <Cabecalho/>
        <Switch>

          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/sobre'>
            <Sobre />
          </Route>
          <Route path='/categoria/:id'>
            <Categoria />
          </Route>

          <Route path='/posts/:id'>
            <Post />
          </Route>
          <Route>
            {/* se o usuário digitar um caminho que não existe no browser, será renderizada a página 404 */}
            <Pagina404/>
          </Route>

        </Switch>

      </BrowserRouter>
    </>
  )
}

export default App
