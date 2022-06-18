import { createContext, useContext, useEffect, useState } from "react";
import { usePagamentoContext } from "./Pagamento";
import { UsuarioContext } from "./Usuario";

export const CarrinhoContext = createContext();

CarrinhoContext.displayName = "Carrinho";

export const CarrinhoProvider = ({ children }) => {
    const [carrinho, setCarrinho] = useState([]);
    const [quantidadeProdutos, setQuantidadeProdutos] = useState(0);
    const [valorTotalCarrinho, setValorTotalCarrinho] = useState(0);

    const estilo = { backgroundColor: "lightblue" };

    return (
        <CarrinhoContext.Provider
            value={{
                carrinho,
                setCarrinho,
                quantidadeProdutos,
                setQuantidadeProdutos,
                valorTotalCarrinho,
                setValorTotalCarrinho
            }}>

            {children}

        </CarrinhoContext.Provider>
    )
}

export const useCarrinhoContext = () => {
    const { 
        carrinho, 
        setCarrinho, 
        quantidadeProdutos, 
        setQuantidadeProdutos,
        valorTotalCarrinho,
        setValorTotalCarrinho 
    } = useContext(CarrinhoContext);

    const {
        formaPagamento
    } = usePagamentoContext();

    const {
        setSaldo
    } = useContext(UsuarioContext);

    // function auxiliar usada em adicionarProduto e removerProduto
    function mudarQuantidade(id, quantidadeParaSomar) {
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

    function efetuarCompra(){
        setCarrinho([]); // esvazia o carrinho
        setSaldo(saldoAtual => saldoAtual - valorTotalCarrinho);

    }


    useEffect(() => {

        // Utilizando o useEffect, conseguiremos escutar o estado carrinho 
        // sempre que acontecer uma atualização no hook carrinho, será feito um cálculo para reduzir o array de carrinho em apenas um número com a quantidade de produtos atual dentro do carrinho. 
        const {novoTotal, novaQuantidade} = carrinho.reduce(  //array.reduce tem dois parâmetros: callback function e initialValue
            (contador, produto) => ({
                novaQuantidade: contador.novaQuantidade + produto.quantidade,
                novoTotal: contador.novoTotal + (produto.valor * produto.quantidade)
            }), //callback function
            {
                novaQuantidade: 0,
                novoTotal: 0
            } // initialValue
        );
        setQuantidadeProdutos(novaQuantidade);
        setValorTotalCarrinho(novoTotal * formaPagamento.juros);
        console.log(formaPagamento.juros);
        console.log(formaPagamento.nome);

    }, [carrinho, setQuantidadeProdutos, setValorTotalCarrinho, formaPagamento])


    return {
        carrinho,
        setCarrinho,
        adicionarProduto,
        removerProduto,
        quantidadeProdutos,
        setQuantidadeProdutos,
        valorTotalCarrinho,
        efetuarCompra
    }
}