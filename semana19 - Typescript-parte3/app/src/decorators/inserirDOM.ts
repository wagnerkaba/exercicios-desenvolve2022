
// Decorator para pegar um elemento dom e inseri-lo em uma variavel input
// vide comentários na classe NegociacaoController
export function inserirDOM(seletor: string) {
    return function (target: any, propertyKey: string) {

        // Este decorator cria getters para inputData, inputQuantidade e inputValor
        // Quando alguém invoca esses getters, o retorno é um elemento DOM correspondente

        console.log(`@inserirDOM - Modificando prototype ${target.constructor.name} e adicionando getter para a propriedade ${propertyKey}`);

        let elemento: HTMLElement;

        const getter = function () {

            
            if (!elemento) {

                // se o getter for chamado pela primeira vez, então "elemento" vai ser undefined (ou seja, falsy)
                // nesse caso, o getter vai buscar o elemento dom desejado
                
                console.log(`@inserirDOM - Buscando elemento do DOM com o seletor ${seletor} para injetar em ${propertyKey}`);

                elemento = <HTMLElement>document.querySelector(seletor);
            }

            // se o getter já foi chamado anteriormente, então "elemento" vai conter o elemento dom. Nesse caso, basta retorná-lo.
            return elemento;
        }

        Object.defineProperty(
            target,
            propertyKey,
            { get: getter }
        )
    }
}