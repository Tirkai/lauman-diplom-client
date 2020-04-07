import React, { Component } from "react";
import style from "./style.module.css";
export class TipsList extends Component {
    render() {
        return <div className={style.tipsList}>{this.props.children}</div>;
    }
}

export default TipsList;
