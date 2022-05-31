import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {busca} from '../api/api'

const ListaPost = ({url}) => {

    const [posts, setPosts] = useState([]);
    useEffect(()=>{
        busca(url, setPosts);
    },[url])
    return (
        <section className='posts container'>
            {
                posts.map((post)=>(
                    // OBS 1: No projeto do professor, "key={post.id}" estava dentro de <article>
                    // coloquei dentro de <Link> para evitar dar o erro no console: Warning: Each child in a list should have a unique "key" prop
                    // OBS 2: O projeto do professor estava funcionando perfeitamente apesar de aparecer o erro no console. Mas este erro no console estava me incomodando.
                    <Link className={`cartao-post cartao-post--${post.categoria}`} to={`/posts/${post.id}`} key={post.id}>
                        <article >
                            <h3 className='cartao-post__titulo'>
                                {post.title}
                            </h3>
                            <p className='cartao-post__meta'>
                                {post.metadescription}
                            </p>

                        </article>
                    </Link>
                ))
            }
        </section>
    );
}

export default ListaPost;