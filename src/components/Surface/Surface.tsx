import React, { Component } from "react";
import style from "./style.module.css";

export class Surface extends Component {
    render() {
        return <div className={style.surface}>{this.props.children}</div>;
    }
}

export default Surface;
