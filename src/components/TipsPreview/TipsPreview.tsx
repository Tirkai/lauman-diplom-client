import { ContentWrapper } from "components/ContentWrapper/ContentWrapper";
import Surface from "components/Surface/Surface";
import React, { Component } from "react";
import style from "./style.module.css";

interface ITipsPreviewProps {
    title: string;
    image: string;
    text: string;
}

export class TipsPreview extends Component<ITipsPreviewProps> {
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
                    </ContentWrapper>
                </div>
            </Surface>
        );
    }
}

export default TipsPreview;
