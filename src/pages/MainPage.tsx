import { AboutAuthor } from "components/AboutAuthor/AboutAuthor";
import { ContentTitle } from "components/ContentTitle/ContentTitle";
import { ContentWrapper } from "components/ContentWrapper/ContentWrapper";
import MainPageIntro from "components/MainPageIntro/MainPageIntro";
import { MainPageLayout } from "components/MainPageLayout/MainPageLayout";
import { MainPageText } from "components/MainPageText/MainPageText";
import Surface from "components/Surface/Surface";
import React, { Component } from "react";

export class MainPage extends Component {
    render() {
        return (
            <MainPageLayout>
                <Surface>
                    <ContentTitle>Об идее</ContentTitle>
                    <ContentWrapper>
                        <MainPageIntro mainText="Test test" subText="123" />
                        <MainPageText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit ut aliquam, purus sit amet luctus venenatis,
                            lectus magna fringilla urna, porttitor rhoncus dolor
                            purus non enim praesent elementum facilisis leo, vel
                            fringilla est ullamcorper eget nulla facilisi etiam
                            dignissim diam quis enim lobortis scelerisque
                            fermentum dui faucibus in ornare quam viverra
                            venenatis, lectus magna fringilla urna, porttitor
                            rhoncus dolor purus non enim praesent elementum
                            facilisis leo, vel fringilla est ullamcorper eget
                            nulla facilisi etiam dignissim diam quis enim
                            lobortis scelerisque fermentum dui faucibus in
                            ornare quam viverra
                        </MainPageText>
                    </ContentWrapper>
                </Surface>
                <Surface>
                    <ContentTitle>Создатель</ContentTitle>
                    <ContentWrapper>
                        <AboutAuthor>Desc</AboutAuthor>
                    </ContentWrapper>
                </Surface>
            </MainPageLayout>
        );
    }
}
