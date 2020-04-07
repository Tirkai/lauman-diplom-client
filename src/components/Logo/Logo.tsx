import React, { Component } from "react";
import { Link } from "react-router-dom";
import style from "./style.module.css";
export class Logo extends Component {
    render() {
        return (
            <div className={style.logo}>
                <Link to="/">
                    <div className={style.mainText}>Основы</div>
                    <div className={style.subText}>самостоятельной жизни</div>
                </Link>
            </div>
        );
    }
}
