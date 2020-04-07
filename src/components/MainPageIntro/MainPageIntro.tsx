import React, { Component } from "react";
import style from "./style.module.css";

interface IMainPageIntroProps {
    mainText: string;
    subText: string;
}

export class MainPageIntro extends Component<IMainPageIntroProps> {
    render() {
        return (
            <div className={style.mainPageIntro}>
                <div className={style.mainText}>{this.props.mainText}</div>
                <div className={style.subText}>{this.props.subText}</div>
            </div>
        );
    }
}

export default MainPageIntro;
