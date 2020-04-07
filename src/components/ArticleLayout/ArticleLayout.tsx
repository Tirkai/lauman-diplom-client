import React, { Component } from "react";
import style from "./style.module.css";
export class ArticleLayout extends Component {
    render() {
        return <div className={style.articleLayout}>{this.props.children}</div>;
    }
}
