import classNames from "classnames";
import React, { Component } from "react";
import style from "./style.module.css";

interface ITipItemProps {
    number: number;
    type: "common" | "important";
}

export class TipItem extends Component<ITipItemProps> {
    render() {
        return (
            <div
                className={classNames(style.tipItem, {
                    [style.typeImportant]: this.props.type === "important",
                })}
            >
                <div className={style.number}>{this.props.number}</div>
                <div className={style.text}>{this.props.children}</div>
            </div>
        );
    }
}
