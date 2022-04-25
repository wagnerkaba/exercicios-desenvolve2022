export function inspecionarMetodo() {
    return function (target, propertyKey, descriptor) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function (...args) {
            console.log(`@inspecionarMetodo - Método: ${propertyKey}`);
            console.log(`@inspecionarMetodo - Parâmetros: ${JSON.stringify(args)}`);
            const retorno = metodoOriginal.apply(this, args);
            console.log(`@inspecionarMetodo - Retorno: ${JSON.stringify(retorno)}`);
            return retorno;
        };
    };
}
