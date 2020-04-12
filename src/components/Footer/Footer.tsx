import { email } from "assets/icons";
import { PageWrapper } from "components/PageWrapper/PageWrapper";
import React, { Component } from "react";
import style from "./style.module.css";

interface IFooterProps {
    copyright: string;
    contacts: string[];
    email: string;
}

export class Footer extends Component<IFooterProps> {
    render() {
        return (
            <div className={style.footer}>
                <PageWrapper>
                    <div className={style.container}>
                        <div className={style.copyright}>
                            {this.props.copyright}
                        </div>
                        <div className={style.contacts}>
                            {this.props.contacts.map((item) => (
                                <div className={style.contactItem}>{item}</div>
                            ))}
                        </div>
                        <div className={style.email}>
                            <a href={`mailto:${this.props.email}`}>
                                <img src={email} />
                            </a>
                        </div>
                    </div>
                </PageWrapper>
            </div>
        );
    }
}

export default Footer;
