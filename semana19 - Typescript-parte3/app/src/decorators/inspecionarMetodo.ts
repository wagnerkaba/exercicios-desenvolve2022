
// Decorator para mostrar quais são os parâmetros e o retorno de um método
// Basta colocar @inspecionarMetodo() antes de um metodo para ele mostrar os parâmetros e o retorno durante a execução
// Não sei qual a utilidade prática disso, mas o professor criou este decorator como um exercicio

export function inspecionarMetodo(){
    return function(
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function (...args:any[]){
            console.log(`--- Método: ${propertyKey}`);
            console.log(`------ Parâmetros: ${JSON.stringify(args)}`);
            
            const retorno = metodoOriginal.apply(this, args);
            console.log(`------ Retorno: ${JSON.stringify(retorno)}`);

            return retorno;
        }
    }
}