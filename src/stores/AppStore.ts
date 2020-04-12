import { ArticlesStore } from "./ArticlesStore";
import { StaticFieldsStore } from "./StaticFieldsStore";

export class AppStore {
    articles: ArticlesStore;
    staticFields: StaticFieldsStore;
    constructor() {
        this.articles = new ArticlesStore();
        this.staticFields = new StaticFieldsStore();
        console.warn("STORE", this);
    }
}
