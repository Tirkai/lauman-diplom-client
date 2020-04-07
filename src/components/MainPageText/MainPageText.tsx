import React, { Component } from "react";
import style from "./style.module.css";
export class MainPageText extends Component {
    render() {
        return <div className={style.mainPageText}>{this.props.children}</div>;
    }
}
