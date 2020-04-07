import Footer from "components/Footer/Footer";
import { Header } from "components/Header/Header";
import { Logo } from "components/Logo/Logo";
import { Navigation } from "components/Navigation/Navigation";
import { PageWrapper } from "components/PageWrapper/PageWrapper";
import { Socials } from "components/Socials/Socials";
import { IStore } from "interfaces/common/IStore";
import { computed } from "mobx";
import { inject, observer } from "mobx-react";
import React, { Component } from "react";
import { Router, Switch } from "react-router";
import { routes } from "routes";
import { mapRoutes } from "utils";
import { browserHistory } from "utils/history";

@inject("store")
@observer
export class AppContainer extends Component<IStore> {
    @computed
    get store() {
        return this.props.store!;
    }

    componentDidMount() {
        this.store.articles.fetchCategories();
    }

    render() {
        return (
            <Router history={browserHistory}>
                <Socials />
                <PageWrapper>
                    <Header>
                        <Logo />
                    </Header>
                    <Navigation categories={this.store.articles.categories} />
                    <Switch>{mapRoutes(routes)}</Switch>
                </PageWrapper>

                <Footer
                    copyright="copyright"
                    contacts={["laumandana@gmail.com"]}
                    email={"laumandana@gmail.com"}
                />
            </Router>
        );
    }
}
