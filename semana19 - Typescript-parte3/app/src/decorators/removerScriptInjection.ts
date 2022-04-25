
// Decorator para remover eventuais ataques de injeção de script
// O código é simples: apenas remove eventuais tags <script> para que não sejam inseridas maliciosamente em um template
// OBS: na parte 2 do curso, este código estava dentro do método update
// o professor colocou o código em um Decorator para que possa ser reutilizado em outros lugares

export function removerScriptInjection(
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function(...args: any[]){
            let retorno = metodoOriginal.apply(this, args);
            if (typeof retorno === 'string'){
                console.log(`@removerScriptInjection: executado na classe ${this.constructor.name} para o método ${propertyKey}`)
                retorno =retorno.replace(/<script>[\s\S]*?<\/script>/, '');
            }
            return retorno;

        }

        return descriptor;
    }
