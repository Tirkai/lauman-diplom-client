import React, { Component } from "react";
import style from "./style.module.css";
export class CategoryLayout extends Component {
    render() {
        return (
            <div className={style.categoryLayout}>{this.props.children}</div>
        );
    }
}

export default CategoryLayout;
