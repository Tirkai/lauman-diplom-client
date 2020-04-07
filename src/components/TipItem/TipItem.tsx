import React, { Component } from "react";
import style from "./style.module.css";

interface ITipItemProps {
    number: number;
}

export class TipItem extends Component<ITipItemProps> {
    render() {
        return (
            <div className={style.tipItem}>
                <div className={style.number}>{this.props.number}</div>
                <div className={style.text}>{this.props.children}</div>
            </div>
        );
    }
}
