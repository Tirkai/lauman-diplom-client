import React, { Component } from "react";
import style from "./style.module.css";

export class PageWrapper extends Component {
    render() {
        return <div className={style.pageWrapper}>{this.props.children}</div>;
    }
}
