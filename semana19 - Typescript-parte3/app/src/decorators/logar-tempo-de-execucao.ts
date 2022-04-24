export function logarTempoDeExecucao() {
    return function(
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) {
        //o parâmetro descriptor nos dá acesso a implementação do método decorado através de descritor.value.
        const metodoOriginal = descriptor.value;
        descriptor.value = function(...args: any[]) {
            const t1 = performance.now();
            // executa o método original
            const retorno = metodoOriginal.apply(this, args);
            const t2 = performance.now();
            //mostra o tempo de execução do método original
            console.log(`${propertyKey}, tempo de execução: ${(t2 - t1)/1000} segundos`);
            retorno
        };

        return descriptor;
    }
}