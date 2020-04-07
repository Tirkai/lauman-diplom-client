import React, { Component } from "react";
import style from "./style.module.css";
export class ContentWrapper extends Component {
    render() {
        return (
            <div className={style.contentWrapper}>{this.props.children}</div>
        );
    }
}
