
// View é uma classe genérica e abstrata
// vide nota de aula sobre classes genéricas
export abstract class View<TipoGenerico> {

    protected elemento: HTMLElement;
    constructor(seletor:string){
        this.elemento = document.querySelector(seletor);
    }


    public update(model: TipoGenerico): void{
        const template = this.template(model);
        this.elemento.innerHTML = template;

    }

    //template() é um método abstrato da classe View. 
    //Os filhos de View devem implementar este método obrigatoriamente.
    protected abstract template(model: TipoGenerico): string;
    





}