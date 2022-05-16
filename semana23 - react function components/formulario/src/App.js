
import { Component, Fragment } from 'react';
import './App.css';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';

class App extends Component {
  render() {
    return (
      // Fragments let you group a list of children without adding extra nodes to the DOM.
      <Fragment>
        <h1>Formulário de Cadastro</h1>
        <FormularioCadastro />
      </Fragment>

    );

  }

}

export default App;
