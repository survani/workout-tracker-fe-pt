import React, { useContext } from "react";
import ProfilePic from "../../../assets/profilepage/profilepic.svg";
import ProfileContext from "../../../contexts/ProfileContext";
import ProfileForm from "../profileform/ProfileForm";
import {
  AsideTitle,
  Bio,
  ChangePhotoButton,
  Container,
  FormContainer,
  ProfileAside,
  UserName,
  UsernameContainer,
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
          <div>
          <p>{userLikes} Likes</p>
          </div>
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
