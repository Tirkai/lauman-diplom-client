import { AboutAuthor } from "components/AboutAuthor/AboutAuthor";
import { ContentTitle } from "components/ContentTitle/ContentTitle";
import { ContentWrapper } from "components/ContentWrapper/ContentWrapper";
import MainPageIntro from "components/MainPageIntro/MainPageIntro";
import { MainPageLayout } from "components/MainPageLayout/MainPageLayout";
import { MainPageText } from "components/MainPageText/MainPageText";
import Surface from "components/Surface/Surface";
import { IStore } from "interfaces/common/IStore";
import { computed } from "mobx";
import { inject, observer } from "mobx-react";
import React, { Component } from "react";

@inject("store")
@observer
export class MainPage extends Component<IStore> {
    @computed
    get store() {
        return this.props.store!;
    }

    render() {
        const { getFieldByKey } = this.store.staticFields;

        const primaryText = getFieldByKey("MainPage", "PrimaryText");
        const secondaryText = getFieldByKey("MainPage", "SecondaryText");
        const content = getFieldByKey("MainPage", "Content");
        const authorImage = getFieldByKey("Author", "Image");
        const authorAbout = getFieldByKey("Author", "About");

        return (
            <MainPageLayout>
                <Surface>
                    <ContentTitle>Об идее</ContentTitle>
                    <ContentWrapper>
                        <MainPageIntro
                            mainText={primaryText}
                            subText={secondaryText}
                        />
                        <MainPageText>{content}</MainPageText>
                    </ContentWrapper>
                </Surface>
                <Surface>
                    <ContentTitle>Создатель</ContentTitle>
                    <ContentWrapper>
                        <AboutAuthor image={authorImage}>
                            {authorAbout}
                        </AboutAuthor>
                    </ContentWrapper>
                </Surface>
            </MainPageLayout>
        );
    }
}
