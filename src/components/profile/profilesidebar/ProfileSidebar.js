import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import { decode } from "jsonwebtoken";
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
  UserName,
  UsernameContainer,
} from "./style";
import VerifiedUser from "../verifieduser/VerifiedUser";

const ProfileSidebar = () => {
  const { userInfo } = useContext(ProfileContext);
  const [userLikes, setUserLikes] = useState();

  const getLikes = () => {
    const { subject } = decode(localStorage.getItem("token"));
    axios
    .get(`https://frozen-hamlet-18508.herokuapp.com/api/likes/user/${subject}`)
    .then((res) => {
      setUserLikes(res.data.message.length);
    })
    .catch((err) => {
      console.log('Error in the ProfileSidebar', err);
    })
  }

  useEffect(() => {
    getLikes()
  }, []);



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
