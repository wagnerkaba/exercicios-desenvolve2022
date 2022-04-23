export class View {
    constructor(seletor, removeScriptInjection) {
        this.removeScriptInjection = false;
        const elemento = document.querySelector(seletor);
        if (elemento) {
            this.elemento = elemento;
        }
        else {
            throw Error(`Seletor ${seletor} não existe no DOM.`);
        }
        if (removeScriptInjection) {
            this.removeScriptInjection = removeScriptInjection;
        }
    }
    update(model) {
        let template = this.template(model);
        if (this.removeScriptInjection) {
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        this.elemento.innerHTML = template;
    }
}
