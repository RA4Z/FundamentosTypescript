import { logarTempoDeExecucao } from "../decorators/logar-tempo-de-execucao.js";

export abstract class View<T> {

    protected element: HTMLElement;
    private escapar: boolean = false;

    //escapar está como opcional aqui, adiciona ? para se tornar opcional
    constructor(seletor: string, escapar?: boolean) {
        const element = document.querySelector(seletor);
        if(element) {
            this.element = element as HTMLElement;
        } else {
            throw Error(`Seletor ${seletor} não existe no Desenvolvedor.`)
        }
        if(escapar) {
            this.escapar = escapar;
        }
    }

    @logarTempoDeExecucao()
    public update(model: T): void {
        let template = this.template(model);
        if(this.escapar) {
            //Expressão regular que remove a tag Script
            template = template.replace(/<scipt>[\s\S]*?<\/script>/, '');
        }
        this.element.innerHTML = template;
    }

    protected abstract template(model: T): string; 
}