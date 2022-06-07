import { useCallback, useState } from "react";
import Pessoa from "./Pessoa";

// O faker (https://www.npmjs.com/package/faker) que o professor mostrou na aula não funciona mais
// para maiores informações: https://stackoverflow.com/questions/21866285/cannot-find-module-faker-after-npm-install-save-dev
// import {faker} from '@faker-js/faker';

import faker from 'faker';

faker.locale = 'pt_BR';

function ListaPessoas() {
    const [pessoas, setPessoas] = useState([
        {
            nome: "Maria",
            id: faker.datatype.uuid()
        },
        {
            nome: "João",
            id: faker.datatype.uuid()
        }
    ]);

    const deletarPessoa = useCallback((id)=>{
        setPessoas(listaAnterior => listaAnterior.filter(pessoa => pessoa.id !== id));
    },[]);




    return (
        <div className="has-text-centered">
            <ul>
                {pessoas.map(
                    (pessoa) => (
                        <Pessoa key={pessoa.id} nome={pessoa.nome} id={pessoa.id} deletar={deletarPessoa} />
                    )
                )}
            </ul>
            <button
                className="button is-primary is-outlined"
                onClick={() => setPessoas(listaAnterior => ([...listaAnterior, 
                    {
                        nome: faker.name.findName(),
                        id: faker.datatype.uuid()
                    }
                ]))}
            >
                Adicionar Pessoa
            </button>
        </div>

    )
}

export default ListaPessoas;