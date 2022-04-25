
// Decorator para pegar um elemento dom e inseri-lo em uma variavel input
// vide comentários na classe NegociacaoController
export function inserirDOM(seletor: string){
    return function(target: any, propertyKey: string){

        // Este decorator cria getters para inputData, inputQuantidade e inputValor
        // Quando alguém invoca esses getters, o retorno é um elemento DOM correspondente
        
        console.log(`@inserirDOM - Modificando prototype ${target.constructor.name} e adicionando getter para a propriedade ${propertyKey}`);


        const getter = function(){
            const elemento = document.querySelector(seletor);
            console.log(`@inserirDOM - Buscando elemento do DOM com o seletor ${seletor} para injetar em ${propertyKey}`);
            return elemento;
        }

        Object.defineProperty(
            target, 
            propertyKey, 
            { get: getter}
        )
    }
}