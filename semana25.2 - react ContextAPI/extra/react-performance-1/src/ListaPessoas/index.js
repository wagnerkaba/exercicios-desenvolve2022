import { useState } from "react";
import Pessoa from "./Pessoa";

function ListaPessoas() {
    const [pessoas, setPessoas] = useState(["Maria", "João"]);

    return (
        <div className="has-text-centered">
            <ul>
                {pessoas.map(
                    (pessoa) => (
                        <Pessoa nome={pessoa}/>
                    )
                )}
            </ul>
            <button
                className="button is-primary is-outlined"
                onClick={() => setPessoas(ListaAnterior => ([...ListaAnterior, "José"]))}
            >
                Adicionar Pessoa
            </button>
        </div>

    )
}

export default ListaPessoas;