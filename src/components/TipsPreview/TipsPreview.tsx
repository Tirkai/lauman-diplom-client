import { arrowDown, arrowUp } from "assets/icons";
import { ContentWrapper } from "components/ContentWrapper/ContentWrapper";
import RatingArrow from "components/RatingArrow/RatingArrow";
import Surface from "components/Surface/Surface";
import { IStore } from "interfaces/common/IStore";
import { inject, observer } from "mobx-react";
import { ScoreModel } from "models/ScoreModel";
import React, { Component } from "react";
import style from "./style.module.css";

interface ITipsPreviewProps extends IStore {
    articleId: number;
    title: string;
    image: string;
    text: string;
    score: ScoreModel;
}

@inject("store")
@observer
export class TipsPreview extends Component<ITipsPreviewProps> {
    handleRate = (value: number) => {
        if (this.props.score.isVoted) return;
        this.props.store?.articles.vote(this.props.articleId, value);

        if (value > 0) {
            this.props.score.upvoteScore();
        } else this.props.score.downvoteScore();
    };

    render() {
        return (
            <Surface>
                <div className={style.tipsPreview}>
                    <ContentWrapper>
                        <div className={style.image}>
                            <img src={this.props.image} />
                        </div>
                        <div className={style.title}>{this.props.title}</div>
                        <div className={style.text}>{this.props.text}</div>
                        <div className={style.rating}>
                            <RatingArrow
                                icon={arrowDown}
                                onClick={() => this.handleRate(-1)}
                                rating={`-${this.props.score.downvote}`}
                            />
                            <RatingArrow
                                icon={arrowUp}
                                onClick={() => this.handleRate(1)}
                                rating={`${this.props.score.upvote}`}
                            />
                        </div>
                    </ContentWrapper>
                </div>
            </Surface>
        );
    }
}

export default TipsPreview;
