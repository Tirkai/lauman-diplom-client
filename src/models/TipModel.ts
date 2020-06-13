export class TipModel {
    id: number;
    index: number;
    content: string;
    type: "common" | "important" = "common";

    constructor(id: number, index: number, content: string) {
        this.id = id;
        this.index = index;
        this.content = content;
    }
}
