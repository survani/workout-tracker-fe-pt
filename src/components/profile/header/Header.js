import React, { useContext } from 'react';
import ProfileContext from '../../../contexts/ProfileContext';
import LandingNav from '../../../containers/landingnav/landingnav';
import { InfoSection, TextContainer, Text, Image } from './style';
import Avatar from '../../../assets/avatarmale.svg';

const Header = () => {
  const { userInfo } = useContext(ProfileContext);
  return (
    <>
      <LandingNav />
      <InfoSection>
        <TextContainer>
          <Image src={Avatar}></Image>
          <Text> {userInfo.username} </Text>
          <Text> {userInfo.email}</Text>
          <Text>XP: {userInfo.xp}</Text>
        </TextContainer>
      </InfoSection>
    </>
  );
};

export default Header;
