import React, { useEffect, useState } from 'react';
import { busca } from '../api/api';
import '../assets/css/blog.css';
import { Link } from 'react-router-dom';


const ListaCategorias = () => {

    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        busca(`/categorias`, setCategorias)
    }, []);
    return (
        <ul className="lista-categorias container flex">
            {
                categorias.map((categoria) => (
                    // OBS 1: No projeto do professor, não havia "key={post.id}" dentro de <Link>
                    // coloquei a key dentro de <Link> para evitar dar o erro no console: Warning: Each child in a list should have a unique "key" prop
                    // OBS 2: O projeto do professor estava funcionando perfeitamente apesar de aparecer o erro no console. Mas este erro no console estava me incomodando.
                    <Link to={`/categoria/${categoria.id}`} key={categoria.id}>
                        <li className={`lista-categorias__categoria lista-categorias__categoria--${categoria.id}`} >
                            {categoria.nome}
                        </li>
                    </Link>
                ))
            }
        </ul>
    );
}

export default ListaCategorias;