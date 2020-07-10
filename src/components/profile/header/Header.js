import React, { useContext } from 'react';
import ProfileContext from '../../../contexts/ProfileContext';
import {
  InfoSection,
  TextContainer,
  Text,
  ImageContainer,
  Image,
  ImageText,
} from './style';
import Avatar from '../../../assets/avatarmale.svg';
import ProfileNav from "../../../containers/profilenav/ProfileNav";

const Header = () => {
  const { userInfo } = useContext(ProfileContext);
  return (
    <>
      <ProfileNav />
      <InfoSection>
        <TextContainer>
          <ImageContainer>
            <Image src={Avatar} alt="profile-avatar"></Image>
            <ImageText href="/editprofile">Edit Profile</ImageText>
          </ImageContainer>
          <Text> {userInfo.username} </Text>
          <Text>{userInfo.bio}</Text>
          <Text> {userInfo.email}</Text>
          <Text>XP: {userInfo.xp}</Text>
        </TextContainer>
      </InfoSection>
    </>
  );
};

export default Header;
