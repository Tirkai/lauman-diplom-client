import React, { Component } from "react";
import style from "./style.module.css";
export class NavigationItem extends Component {
    render() {
        return (
            <div className={style.navigationItem}>{this.props.children}</div>
        );
    }
}

export default NavigationItem;
