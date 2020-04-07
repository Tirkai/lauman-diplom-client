import React, { Component } from "react";
import style from "./style.module.css";

export class Header extends Component {
    render() {
        return (
            <div className={style.header}>
                <div className={style.container}>{this.props.children}</div>
            </div>
        );
    }
}
