import React, { Component } from "react";
import style from "./style.module.css";

export class ContentTitle extends Component {
    render() {
        return <div className={style.contentTitle}>{this.props.children}</div>;
    }
}
