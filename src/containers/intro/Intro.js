import React from 'react';
import Image from '../../assets/landingpage/image1.svg';

import {
  Content,
  IntroSection,
  IntroText,
  BoldText,
  SubText,
  SpanText,
  ImageContainer,
  MainImage,
  ButtonMobileContainer,
  ButtonMobileIntro,
  ButtonDesktopContainer,
  ButtonDesktopIntro,
} from './style';

const Intro = () => {
  return (
    <>
      <IntroSection>
        <Content>
          <IntroText>
            <BoldText>
              Stay on top of your health with <SpanText>ease</SpanText>
            </BoldText>
            <SubText>
              Stay on track to achieve your fitness goals and build a community{' '}
            </SubText>
            <ButtonDesktopContainer>
              <a href="/account">
                <ButtonDesktopIntro>Get Started</ButtonDesktopIntro>
              </a>
            </ButtonDesktopContainer>
          </IntroText>
          <ImageContainer>
            <MainImage src={Image} alt="Workout"></MainImage>
            <ButtonMobileContainer>
              <a href="/account">
                <ButtonMobileIntro>Let's Start</ButtonMobileIntro>
              </a>
            </ButtonMobileContainer>
          </ImageContainer>
        </Content>
      </IntroSection>
    </>
  );
};

export default Intro;
