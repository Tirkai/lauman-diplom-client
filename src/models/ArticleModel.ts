import { IImage } from "interfaces/common/IImage";
import { CategoryModel } from "./CategoryModel";
import { TipModel } from "./TipModel";

interface IArticleModelOptions {
    id: number;
    name: string;
    description: string;
    category: CategoryModel;
    tips: TipModel[];
    image: IImage;
}

export class ArticleModel {
    id: number;
    name: string;
    description: string;
    category: CategoryModel;
    tips: TipModel[];
    image: IImage;
    constructor(options: IArticleModelOptions) {
        this.id = options.id;
        this.name = options.name;
        this.description = options.description;
        this.category = options.category;
        this.tips = options.tips;
        this.image = options.image;
    }
}
