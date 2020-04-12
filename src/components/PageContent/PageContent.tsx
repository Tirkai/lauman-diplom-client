import React, { Component } from "react";
import style from "./style.module.css";
export class PageContent extends Component {
    render() {
        return <div className={style.pageContent}>{this.props.children}</div>;
    }
}

export default PageContent;
