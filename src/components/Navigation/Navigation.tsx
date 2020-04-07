import NavigationItem from "components/NavigationItem/NavigationItem";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import style from "./style.module.css";

interface ICategoryItem {
    id: number;
    name: string;
}

interface INavigationProps {
    categories: ICategoryItem[];
}

export class Navigation extends Component<INavigationProps> {
    render() {
        return (
            <div className={style.navigation}>
                <div className={style.container}>
                    {this.props.categories.map((category) => (
                        <Link to={`/category/${category.id}`}>
                            <NavigationItem>{category.name}</NavigationItem>
                        </Link>
                    ))}
                </div>
            </div>
        );
    }
}
