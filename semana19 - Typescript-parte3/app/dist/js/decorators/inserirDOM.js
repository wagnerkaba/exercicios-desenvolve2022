export function inserirDOM(seletor) {
    return function (target, propertyKey) {
        console.log(`@inserirDOM - Modificando prototype ${target.constructor.name} e adicionando getter para a propriedade ${propertyKey}`);
        let elemento;
        const getter = function () {
            if (!elemento) {
                console.log(`@inserirDOM - Buscando elemento do DOM com o seletor ${seletor} para injetar em ${propertyKey}`);
                elemento = document.querySelector(seletor);
            }
            return elemento;
        };
        Object.defineProperty(target, propertyKey, { get: getter });
    };
}
