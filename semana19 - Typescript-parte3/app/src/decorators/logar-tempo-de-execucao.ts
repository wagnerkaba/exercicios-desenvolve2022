
// function logarTempoDeExecucao: É um Decorator para mostrar o tempo de execução de um método
// parâmetro "emSegundos": serve para indicar se o tempo de execução vai ser mostrado em segundos;
// o valor default de emSegundos é false. Ou seja, por padrão, o tempo é mostrado em milissegundos
export function logarTempoDeExecucao(emSegundos: boolean = false) {
    return function(
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) {
        //o parâmetro descriptor nos dá acesso a implementação do método decorado através de descritor.value.
        const metodoOriginal = descriptor.value;
        descriptor.value = function(...args: any[]) {

            let divisor = 1;
            let unidade = 'milissegundos'
            if(emSegundos) {
                divisor = 1000;
                unidade = 'segundos';
            }
            const t1 = performance.now();
            // executa o método original
            const retorno = metodoOriginal.apply(this, args);
            const t2 = performance.now();
            //mostra o tempo de execução do método original
            console.log(`@logarTempoDeExecucao - Tempo de execução do método ${propertyKey}:  ${(t2 - t1)/divisor} ${unidade}`);

            return retorno;
        };

        return descriptor;
    }
}