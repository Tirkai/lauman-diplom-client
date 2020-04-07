import author from "assets/images/author.png";
import React, { Component } from "react";
import style from "./style.module.css";

export class AboutAuthor extends Component {
    render() {
        return (
            <div className={style.aboutAuthor}>
                <div className={style.image}>
                    <img src={author} />
                </div>
                <div className={style.desc}>{this.props.children}</div>
            </div>
        );
    }
}
