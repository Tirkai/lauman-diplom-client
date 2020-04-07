export class TipModel {
    id: number;
    number: number;
    content: string;

    constructor(id: number, number: number, content: string) {
        this.id = id;
        this.number = number;
        this.content = content;
    }
}
