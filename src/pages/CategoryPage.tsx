import { ArticleLayout } from "components/ArticleLayout/ArticleLayout";
import CategoryLayout from "components/CategoryLayout/CategoryLayout";
import { EmptyCategory } from "components/EmptyCategory/EmptyCategory";
import { TipItem } from "components/TipItem/TipItem";
import TipsList from "components/TipsList/TipsList";
import TipsPreview from "components/TipsPreview/TipsPreview";
import { IScore } from "interfaces/common/IScore";
import { IStore } from "interfaces/common/IStore";
import { computed, reaction } from "mobx";
import { inject, observer } from "mobx-react";
import { ScoreModel } from "models/ScoreModel";
import React, { Component } from "react";
import { RouteComponentProps } from "react-router";
import { getUrlWithCmsPort } from "utils";

interface ICategoryPageRouteParams {
    id: string;
}

interface ICategoryPageProps
    extends IStore,
        RouteComponentProps<ICategoryPageRouteParams> {}

@inject("store")
@observer
export class CategoryPage extends Component<ICategoryPageProps> {
    @computed
    get store() {
        return this.props.store!;
    }

    fetchArticles = () => {
        const categoryId = parseInt(this.props.match.params.id);

        if (categoryId) {
            this.store.articles.fetchArticles(categoryId);
        }
    };

    componentDidMount() {
        this.fetchArticles();

        reaction(
            () => this.props.match.params.id,
            () => this.fetchArticles(),
        );
    }

    createScore = (score: IScore) => {
        return new ScoreModel(score.upvote, score.downvote);
    };

    render() {
        const emptyCategory = this.store.staticFields.getFieldByKey(
            "Category",
            "Empty",
        );

        return this.store.articles.articles.length ? (
            <CategoryLayout>
                {this.store.articles.articles.map((article) => (
                    <ArticleLayout>
                        <TipsPreview
                            articleId={article.id}
                            title={article.name}
                            text={article.description}
                            image={getUrlWithCmsPort(article.image.url)}
                            score={this.createScore(article.score)}
                        />
                        <TipsList>
                            {article.tips.map((item) => (
                                <TipItem number={item.index} type={item.type}>
                                    {item.content}
                                </TipItem>
                            ))}
                        </TipsList>
                    </ArticleLayout>
                ))}
            </CategoryLayout>
        ) : this.store.articles.isFetching ? (
            <EmptyCategory />
        ) : (
            <EmptyCategory>{emptyCategory}</EmptyCategory>
        );
    }
}
