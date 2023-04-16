export abstract class View<T> {

    protected element: HTMLElement;
    private escapar: boolean = false;

    constructor(seletor: string, escapar: boolean) {
        this.element = document.querySelector(seletor);
    }

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