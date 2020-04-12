import React, { Component } from "react";
import style from "./style.module.css";

interface IAboutAuthorProps {
    image: string;
}

export class AboutAuthor extends Component<IAboutAuthorProps> {
    render() {
        return (
            <div className={style.aboutAuthor}>
                <div className={style.image}>
                    <img src={this.props.image} />
                </div>
                <div className={style.desc}>{this.props.children}</div>
            </div>
        );
    }
}
