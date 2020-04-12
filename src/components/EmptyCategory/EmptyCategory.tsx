import Surface from "components/Surface/Surface";
import React, { Component } from "react";
import style from "./style.module.css";
export class EmptyCategory extends Component {
    render() {
        return (
            <Surface>
                <div className={style.emptyCategory}>
                    <div className={style.container}>{this.props.children}</div>
                </div>
            </Surface>
        );
    }
}
