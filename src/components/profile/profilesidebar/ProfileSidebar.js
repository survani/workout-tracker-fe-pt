import React, { useContext } from "react";
import ProfilePic from "../../../assets/profilepage/profilepic.svg";
import ProfileContext from "../../../contexts/ProfileContext";
import ProfileForm from "../form/ProfileForm";
import {
  AsideTitle,
  Bio,
  ChangePhotoButton,
  Container,
  FormContainer,
  ProfileAside,
  UserName,
} from "./style";

const ProfileSidebar = () => {
  const { userInfo } = useContext(ProfileContext);

  return (
    <>
      <Container>
        <ProfileAside>
          <AsideTitle> Profile </AsideTitle>
          <img src={ProfilePic} />
          <UserName>{userInfo.username}</UserName>
          <Bio>{userInfo.bio}</Bio>
          <ChangePhotoButton> Change Photo </ChangePhotoButton>
        </ProfileAside>
        <FormContainer>
          <ProfileForm />
        </FormContainer>
      </Container>
    </>
  );
};

export default ProfileSidebar;
