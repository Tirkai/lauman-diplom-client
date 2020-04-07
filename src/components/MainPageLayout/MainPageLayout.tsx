import React, { Component } from "react";
import style from "./style.module.css";

export class MainPageLayout extends Component {
    render() {
        return (
            <div className={style.mainPageLayout}>{this.props.children}</div>
        );
    }
}
