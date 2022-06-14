import { createContext, useContext, useState } from "react";

export const CarrinhoContext = createContext();

CarrinhoContext.displayName = "Carrinho";

export const CarrinhoProvider = ({ children }) => {
    const [carrinho, setCarrinho] = useState([]);
    const estilo = { backgroundColor: "lightblue" };

    return (
        <CarrinhoContext.Provider value={{ carrinho, setCarrinho }}>

            {children}

        </CarrinhoContext.Provider>
    )
}

export const useCarrinhoContext = () => {
    const { carrinho, setCarrinho } = useContext(CarrinhoContext);

    // function auxiliar usada em adicionarProduto e removerProduto
    function mudarQuantidade(id, quantidadeParaSomar){
        return carrinho.map(
            itemDoCarrinho => {
                if (itemDoCarrinho.id === id) itemDoCarrinho.quantidade += quantidadeParaSomar;
                return itemDoCarrinho;
            }
        )
    }

    // Para entender porque adicionarProduto está neste arquivo, vide nota de aula 3.07: Responsabilidade única
    function adicionarProduto(novoProduto) {

        // verifica se o produto adicionado já existe no carrinho
        const temProduto = carrinho.some(itemDoCarrinho => itemDoCarrinho.id === novoProduto.id);

        // se o produto adicionado não existe no carrinho, coloca ele no carrinho
        if (!temProduto) {
            novoProduto.quantidade = 1;
            return setCarrinho(carrinhoAnterior => [...carrinhoAnterior, novoProduto]);
        }

        //se o produto adicionado já existe no carrinho, aumenta a quantidade do produto adicionado
        setCarrinho(mudarQuantidade(novoProduto.id, 1));
    }


    function removerProduto(id) {
        const produto = carrinho.find(itemDoCarrinho => itemDoCarrinho.id === id);
        const ehUltimo = produto.quantidade === 1;

        // se o item for o último produto de sua categoria, então remove-se o produto
        if (ehUltimo) {
            return setCarrinho(carrinhoAnterior =>
                carrinhoAnterior.filter(
                    itemDoCarrinho => itemDoCarrinho.id !== id
                ));
        }

        // se houver vários items da mesma categoria, diminui-se a quantidade 
        setCarrinho(mudarQuantidade(id, -1));
    }



    return {
        carrinho,
        setCarrinho,
        adicionarProduto,
        removerProduto
    }
}