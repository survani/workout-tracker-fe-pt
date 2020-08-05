import React, { useContext, useState, useEffect } from "react";
import {axiosWithAuth} from "../../authentication/axiosWithAuth";
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
  console.log();
  const { userInfo } = useContext(ProfileContext);
  // const [userLikes, setUserLikes] = useState([])

  // let data;
  //   axios.get(`https://frozen-hamlet-18508.herokuapp.com/api/comments/get/${entity_id}`)
  //   .then(response =>{
  //       data = response;
  //   })
  //   .catch(err =>{
  //       console.log(err);
  //   })
    
  //   return data;


  // useEffect(() => {
  //   axiosWithAuth()
  //     .get(`https://frozen-hamlet-18508.herokuapp.com/api/likes/post/${data.this_entity_id}`)
  //     .then((response) => {
  //       console.log(response.data.message);
  //     })
  //     .catch((err) => {
  //       console.log("Error in ViewableWorkouts", err);
  //     });
  // }, []);

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
