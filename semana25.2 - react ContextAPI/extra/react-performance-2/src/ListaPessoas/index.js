import { useCallback, useState } from "react";
import Pessoa from "./Pessoa";

// O faker (https://www.npmjs.com/package/faker) que o professor mostrou na aula não funciona mais
// para maiores informações: https://stackoverflow.com/questions/21866285/cannot-find-module-faker-after-npm-install-save-dev
import {faker} from '@faker-js/faker';

faker.locale = 'pt_BR';

function ListaPessoas() {
    const [pessoas, setPessoas] = useState(["Maria", "João"]);

    const deletarPessoa = useCallback((id)=>{
        setPessoas(ListaAnterior => ListaAnterior.filter((pessoa, indexAnterior) => indexAnterior !== id));
    },[]);




    return (
        <div className="has-text-centered">
            <ul>
                {pessoas.map(
                    (pessoa, index) => (
                        <Pessoa nome={pessoa} id={index} deletar={deletarPessoa} />
                    )
                )}
            </ul>
            <button
                className="button is-primary is-outlined"
                onClick={() => setPessoas(ListaAnterior => ([...ListaAnterior, faker.name.findName()]))}
            >
                Adicionar Pessoa
            </button>
        </div>

    )
}

export default ListaPessoas;