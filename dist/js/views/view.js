export class View {
    //escapar está como opcional aqui, adiciona ? para se tornar opcional
    constructor(seletor, escapar) {
        this.escapar = false;
        this.element = document.querySelector(seletor);
        if (escapar) {
            this.escapar = escapar;
        }
    }
    update(model) {
        let template = this.template(model);
        if (this.escapar) {
            //Expressão regular que remove a tag Script
            template = template.replace(/<scipt>[\s\S]*?<\/script>/, '');
        }
        this.element.innerHTML = template;
    }
}
