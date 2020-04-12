import Footer from "components/Footer/Footer";
import { Header } from "components/Header/Header";
import { Logo } from "components/Logo/Logo";
import { Navigation } from "components/Navigation/Navigation";
import PageContent from "components/PageContent/PageContent";
import { PageWrapper } from "components/PageWrapper/PageWrapper";
import { Socials } from "components/Socials/Socials";
import { IStore } from "interfaces/common/IStore";
import { computed, reaction } from "mobx";
import { disposeOnUnmount, inject, observer } from "mobx-react";
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
        this.store.staticFields.fetchStaticFields();
        this.store.articles.fetchCategories();

        disposeOnUnmount(
            this,
            reaction(
                () => this.store.staticFields.fields,
                () =>
                    (document.title = this.store.staticFields.getFieldByKey(
                        "Title",
                        "PageTitle",
                    )),
            ),
        );
    }

    render() {
        if (this.store.staticFields.isReady) {
            const { getFieldByKey } = this.store.staticFields;

            const titlePrimaryText = getFieldByKey("Title", "PrimaryText");
            const titleSecondaryText = getFieldByKey("Title", "SecondaryText");

            const copyright = getFieldByKey("Footer", "Copyright");
            const email = getFieldByKey("Links", "Email");

            return (
                <Router history={browserHistory}>
                    <Socials />
                    <PageContent>
                        <PageWrapper>
                            <Header>
                                <Logo
                                    mainText={titlePrimaryText}
                                    subText={titleSecondaryText}
                                />
                            </Header>
                            <Navigation
                                categories={this.store.articles.categories}
                            />
                            <Switch>{mapRoutes(routes)}</Switch>
                        </PageWrapper>
                    </PageContent>

                    <Footer
                        copyright={copyright}
                        contacts={[email]}
                        email={email}
                    />
                </Router>
            );
        } else {
            return "";
        }
    }
}
