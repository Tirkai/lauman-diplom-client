import React, { Component } from "react";
import { Link } from "react-router-dom";
import style from "./style.module.css";

interface ILogoProps {
    mainText: string;
    subText: string;
}

export class Logo extends Component<ILogoProps> {
    render() {
        return (
            <div className={style.logo}>
                <Link to="/">
                    <div className={style.mainText}>{this.props.mainText}</div>
                    <div className={style.subText}>{this.props.subText}</div>
                </Link>
            </div>
        );
    }
}
