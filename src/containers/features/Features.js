import React from 'react';
import {
  ImageContainer,
  ImageContainer2,
  FeatureTextContainer,
  MainImage,
  SubText,
  ExitText,
  TextDesktop,
  TextSubDesktop,
  ButtonMobileContainer,
  ButtonMobileIntro,
  ButtonDesktopContainer,
  ButtonDesktopIntro,
  CtaSection,
} from './style';

import WomanExercise from '../../assets/landingpage/womanexercise.svg';
import Schedule from '../../assets/landingpage/schedule.svg';
import GuyCooking from '../../assets/landingpage/guycooking.svg';
import CloudSync from '../../assets/landingpage/cloudsync.svg';

const Features = () => {
  return (
    <>
      <section>
        <ImageContainer>
          <MainImage src={WomanExercise} alt="woman excersise"></MainImage>
          <FeatureTextContainer>
            <SubText>
              Find the exercises you need to make your own workout plans
            </SubText>
            <TextDesktop>Create your own workout plans</TextDesktop>
            <TextSubDesktop>
              Choose from a variety of exercises, edit the intensity level and
              set goals to track your progress{' '}
            </TextSubDesktop>
          </FeatureTextContainer>
        </ImageContainer>
        <ImageContainer2>
          <MainImage src={Schedule} alt="Schedule"></MainImage>
          <FeatureTextContainer>
            <SubText>
              Find the exercises you need to make your own workout plans
            </SubText>
            <TextDesktop>Schedule your workouts</TextDesktop>
            <TextSubDesktop>
              Set up a schedule to be consistent and workout at the best time
              for you
            </TextSubDesktop>
          </FeatureTextContainer>
        </ImageContainer2>
        <ImageContainer>
          <MainImage src={GuyCooking} alt="Cooking"></MainImage>
          <FeatureTextContainer>
            <SubText>
              Find the exercises you need to make your own workout plans
            </SubText>
            <TextDesktop>Set a meal plan</TextDesktop>
            <TextSubDesktop>
              Keep track of your calories and make a meal plan that helps
              achieve your health goals
            </TextSubDesktop>
          </FeatureTextContainer>
        </ImageContainer>
        <ImageContainer2>
          <MainImage src={CloudSync} alt="Share"></MainImage>
          <FeatureTextContainer>
            <SubText>
              Find the exercises you need to make your own workout plans
            </SubText>
            <TextDesktop>Share your workout plans</TextDesktop>
            <TextSubDesktop>
              Once you create a plan you can share it, making it available for
              other user to take advantage of it and help each other achieve
              goals.
            </TextSubDesktop>
          </FeatureTextContainer>
        </ImageContainer2>
      </section>
      <CtaSection>
        <ExitText>Ready to start your fitness journey?</ExitText>
        <ButtonMobileContainer>
          <ButtonMobileIntro>Let's Start</ButtonMobileIntro>
        </ButtonMobileContainer>
        <ButtonDesktopContainer>
          <ButtonDesktopIntro>Let's Start</ButtonDesktopIntro>
        </ButtonDesktopContainer>
      </CtaSection>
    </>
  );
};

export default Features;
