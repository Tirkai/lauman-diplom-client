import Axios from "axios";
import { IArticleResponse } from "interfaces/response/IArticleResponse";
import { ICategoryResponse } from "interfaces/response/ICategoryResponse";
import { action, observable } from "mobx";
import { ArticleModel } from "models/ArticleModel";
import { CategoryModel } from "models/CategoryModel";
import { getUrlWithCmsPort } from "utils";
export class ArticlesStore {
    @observable
    isFetching: boolean = false;

    @observable
    categories: CategoryModel[] = [];

    @observable
    articles: ArticleModel[] = [];

    @action
    async fetchCategories() {
        const categories = await Axios.get<ICategoryResponse[]>(
            getUrlWithCmsPort("/categories"),
        );

        this.categories = categories.data.map(
            (item) => new CategoryModel(item.id, item.name),
        );

        console.log(this.categories);
    }

    @action
    async fetchArticles(categoryId: number) {
        this.isFetching = true;
        try {
            this.articles = [];
            const articles = await Axios.get<IArticleResponse[]>(
                getUrlWithCmsPort(`/articles?category=${categoryId}`),
            );

            this.articles = articles.data.map((item) => new ArticleModel(item));
            this.isFetching = false;
        } catch (e) {
            this.isFetching = false;
        }
    }
}
