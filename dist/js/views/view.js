export class View {
    constructor(seletor) {
        const element = document.querySelector(seletor);
        if (element) {
            this.element = element;
        }
        else {
            throw Error(`Seletor ${seletor} não existe no Desenvolvedor.`);
        }
    }
    update(model) {
        let template = this.template(model);
        this.element.innerHTML = template;
    }
}
//# sourceMappingURL=view.js.map