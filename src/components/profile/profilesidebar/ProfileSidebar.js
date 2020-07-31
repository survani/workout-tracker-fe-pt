import React, { useContext } from "react";
import ProfilePic from "../../../assets/profilepage/profilepic.svg";
import ProfileContext from "../../../contexts/ProfileContext";
import ProfileForm from "../form/ProfileForm";
import {
  AsideTitle,
  Bio,
  ChangePhotoButton,
  Container,
  FormContainer, Links,
  ProfileAside,
  UserName, UsernameContainer,
} from "./style";
import VerifiedUser from "../verifieduser/VerifiedUser";

const ProfileSidebar = () => {
  const { userInfo } = useContext(ProfileContext);

  return (
    <>
      <Container>
        <ProfileAside>
          <AsideTitle> Profile </AsideTitle>
          <img src={ProfilePic} alt="Profile Avatar" />
          <UsernameContainer>
            <UserName>{userInfo.username}</UserName>
            <VerifiedUser />
          </UsernameContainer>
          <Bio>{userInfo.bio}</Bio>
          <ChangePhotoButton> Change Photo </ChangePhotoButton>
          <p> Are you verified? <Links href="mailto: verifyuser@fittracker.com">Apply</Links></p>
        </ProfileAside>
        <FormContainer>
          <ProfileForm />
        </FormContainer>
      </Container>
    </>
  );
};

export default ProfileSidebar;
