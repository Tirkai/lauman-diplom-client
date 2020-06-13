import { IImage } from "interfaces/common/IImage";
import { IScore } from "interfaces/common/IScore";
import { ICategoryResponse } from "./ICategoryResponse";
import { ITipResponse } from "./ITipResponse";

export interface IArticleResponse {
    id: number;
    name: string;
    description: string;
    category: ICategoryResponse;
    tips: ITipResponse[];
    image: IImage;
    score: IScore;
}
