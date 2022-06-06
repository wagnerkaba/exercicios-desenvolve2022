import { memo } from "react";

function Pessoa({nome}){

    console.log(`Pessoa ${nome} renderizado`);
    return (
        <li className="box mb-3">
            {nome}
        </li>
    )
}

export default memo(Pessoa);


