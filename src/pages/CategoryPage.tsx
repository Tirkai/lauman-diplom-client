import { ArticleLayout } from "components/ArticleLayout/ArticleLayout";
import CategoryLayout from "components/CategoryLayout/CategoryLayout";
import { EmptyCategory } from "components/EmptyCategory/EmptyCategory";
import { TipItem } from "components/TipItem/TipItem";
import TipsList from "components/TipsList/TipsList";
import TipsPreview from "components/TipsPreview/TipsPreview";
import { IStore } from "interfaces/common/IStore";
import { computed, reaction } from "mobx";
import { inject, observer } from "mobx-react";
import React, { Component } from "react";
import { RouteComponentProps } from "react-router";

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

    render() {
        return this.store.articles.articles.length ? (
            <CategoryLayout>
                {this.store.articles.articles.map((article) => (
                    <ArticleLayout>
                        <TipsPreview
                            title={article.name}
                            text={article.description}
                            image={
                                "http://" +
                                window.location.hostname +
                                ":1337" +
                                article.image.url
                            }
                        />
                        <TipsList>
                            {article.tips.map((item) => (
                                <TipItem number={item.number}>
                                    {item.content}
                                </TipItem>
                            ))}
                        </TipsList>
                    </ArticleLayout>
                ))}
            </CategoryLayout>
        ) : (
            <EmptyCategory />
        );
    }
}
