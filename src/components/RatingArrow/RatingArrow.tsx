import React, { Component } from "react";
import style from "./style.module.css";

interface IRatingArrowProps {
    onClick: () => void;
    icon: string;
    rating: string;
}

export class RatingArrow extends Component<IRatingArrowProps> {
    render() {
        return (
            <div className={style.ratingArrow} onClick={this.props.onClick}>
                <img src={this.props.icon} />
                <div className={style.rating}>{this.props.rating}</div>
            </div>
        );
    }
}

export default RatingArrow;
