import { ArticlesStore } from "./ArticlesStore";

export class AppStore {
    articles: ArticlesStore;
    constructor() {
        this.articles = new ArticlesStore();
        console.warn("STORE", this);
    }
}
