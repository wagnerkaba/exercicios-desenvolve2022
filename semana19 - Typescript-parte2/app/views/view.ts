
// View é uma classe genérica e abstrata
// vide nota de aula sobre classes genéricas
export abstract class View<TipoGenerico> {

    protected elemento: HTMLElement;
    private removeScriptInjection = false;

    constructor(seletor:string, removeScriptInjection?: boolean){

        const elemento = document.querySelector(seletor);

        // elemento pode ser null ou um Element. Caso seja null, lança um erro
        if (elemento){
            // se elemento não for nulo, faz type casting para HTMLElement
            this.elemento = elemento as HTMLElement;
        } else {
            throw Error(`Seletor ${seletor} não existe no DOM.`)
        }

        // o valor default de removeScriptInjection é falso
        // mas ele se torna verdadeiro, caso o usuário passe "true" como parâmetro de removeScriptInjection
        if (removeScriptInjection){
            this.removeScriptInjection = removeScriptInjection;
        }
    }


    public update(model: TipoGenerico): void{
        let template = this.template(model);

        // código para prevenir um script injection attack
        if (this.removeScriptInjection){
            //obs: este código é muito simples para realmente prevenir um script injection attack
            //o professor deu este exemplo apenas para exemplificar o uso de optional parameters no construtor
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        this.elemento.innerHTML = template;

    }

    //template() é um método abstrato da classe View. 
    //Os filhos de View devem implementar este método obrigatoriamente.
    protected abstract template(model: TipoGenerico): string;
    





}