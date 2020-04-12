import { instagram, twitter, vk } from "assets/icons";
import { IStore } from "interfaces/common/IStore";
import { computed } from "mobx";
import { inject, observer } from "mobx-react";
import React, { Component } from "react";
import style from "./style.module.css";

interface ISocailItem {
    icon: string;
    name: string;
    link: string;
}

@inject("store")
@observer
export class Socials extends Component<IStore> {
    @computed
    get getField() {
        return this.props.store!.staticFields.getFieldByKey;
    }

    socials: ISocailItem[] = [
        {
            icon: vk,
            name: "VK",
            link: this.getField("Links", "Vk"),
        },
        {
            icon: twitter,
            name: "Twitter",
            link: this.getField("Links", "Twitter"),
        },
        {
            icon: instagram,
            name: "Instagram",
            link: this.getField("Links", "Instagram"),
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
