import Axios from "axios";
import { IArticleResponse } from "interfaces/response/IArticleResponse";
import { ICategoryResponse } from "interfaces/response/ICategoryResponse";
import { action, observable } from "mobx";
import { ArticleModel } from "models/ArticleModel";
import { CategoryModel } from "models/CategoryModel";
export class ArticlesStore {
    @observable
    categories: CategoryModel[] = [];

    @observable
    articles: ArticleModel[] = [];

    @action
    async fetchCategories() {
        const categories = await Axios.get<ICategoryResponse[]>(
            `http://${window.location.hostname}:1337/categories`,
        );

        this.categories = categories.data.map(
            (item) => new CategoryModel(item.id, item.name),
        );

        console.log(this.categories);
    }

    @action
    async fetchArticles(categoryId: number) {
        const articles = await Axios.get<IArticleResponse[]>(
            `http://${window.location.hostname}:1337/articles?category=${categoryId}`,
        );

        this.articles = articles.data.map((item) => new ArticleModel(item));
    }
}
