import { Container } from './styles';
import { memo } from 'react';
import { IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { useCarrinhoContext } from 'common/context/Carrinho';


function Produto({
  nome,
  foto,
  id,
  valor,
  unidade
}) {

  const { carrinho, adicionarProduto, removerProduto } = useCarrinhoContext();

  const produtoNoCarrinho = carrinho.find(itemDoCarrinho => itemDoCarrinho.id === id);

  return (
    <Container>
      <div>
        <img
          src={`/assets/${foto}.png`}
          alt={`foto de ${nome}`}
        />
        <p>
          {nome} - R$ {valor?.toFixed(2)} <span>Kg</span>
        </p>
      </div>
      <div>
        <IconButton
          color="secondary"
          onClick={()=>removerProduto(id)}
        >
          <RemoveIcon />
        </IconButton>

        {produtoNoCarrinho?.quantidade || 0
        /*  
            se o produto não foi adicionado, a propriedade "quantidade" não existe e o sistema vai dar erro. 
            isso porque a propriedade "quantidade" é criada apenas quando um produto é adicionado 
            (vide function adicionarProduto em Carrinho.js)
            para evitar isso, usou-se "?" (optional chaining). 
            Assim, caso produto não tenha sido adicionado, quantidade vai retornar "undefined" e não vai haver erro.
        */}
        <IconButton
          color="primary"
          onClick={() => adicionarProduto({ nome, foto, id, valor })}
        >
          <AddIcon />
        </IconButton>
      </div>
    </Container>
  )
}

export default memo(Produto)