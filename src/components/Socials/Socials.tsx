import { instagram, twitter, vk } from "assets/icons";
import React, { Component } from "react";
import style from "./style.module.css";

interface ISocailItem {
    icon: string;
    name: string;
    link: string;
}

export class Socials extends Component {
    socials: ISocailItem[] = [
        {
            icon: vk,
            name: "VK",
            link: "https://vk.com/lauuuman",
        },
        {
            icon: twitter,
            name: "Twitter",
            link: "https://twitter.com",
        },
        {
            icon: instagram,
            name: "Instagram",
            link: "https://instagram.com/lauuuman",
        },
    ];

    render() {
        return (
            <div className={style.socials}>
                <div className={style.container}>
                    {this.socials.map((item) => (
                        <a className={style.item} href={item.link}>
                            <img src={item.icon} alt={item.name} />
                        </a>
                    ))}
                </div>
            </div>
        );
    }
}
