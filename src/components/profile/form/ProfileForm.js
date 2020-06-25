import React, { useState } from "react";
import { axiosWithAuth } from "../../authentication/axiosWithAuth";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  ButtonMobileContainer,
  ButtonMobileIntro,
  Form,
  Input,
  Label,
  PageTitle,
} from "./style";

const ProfileForm = (props) => {
  console.log("props", props);
  const { register, errors, handleSubmit } = useForm();
  const [editProfile, setEditProfile] = useState({});

  let history = useHistory();
  const editProfileInfo = () => {
    //provides the info for the specific user that is logged in.
    axiosWithAuth()
      .put(`https://frozen-hamlet-18508.herokuapp.com/api/users/`, editProfile)
      .then((res) => {
        setEditProfile(res.data);
        console.log("res.data", res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChange = (e) => {
    e.preventDefault();
    setEditProfile({ ...editProfile, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    console.log(e);
    editProfileInfo(editProfile);
    setEditProfile({ bio: "" });
    history.push("/profile");
  };

  return (
    <>
      <PageTitle> Edit Profile </PageTitle>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Label htmlFor="email">Bio</Label>
        <Input
          type="text"
          value={editProfile.bio}
          id="bio"
          label="bio"
          name="bio"
          htmlFor="bio"
          placeholder="Update Bio"
          onChange={handleChange}
          ref={register({
            minLength: {
              value: 3,
              message: "Bio is to short",
            },
          })}
        />
        {/* NOTE: Responsible for displaying the errors */}
        {errors.bio && errors.bio.message}
        <Label htmlFor="email">Username</Label>
        <Input
          type="text"
          value={editProfile.username}
          id="username"
          label="username"
          name="username"
          htmlFor="username"
          placeholder="Update Username"
          onChange={handleChange}
          ref={register({
            minLength: {
              value: 3,
              message: "Username is to short",
            },
          })}
        />
        {/* NOTE: Responsible for displaying the errors */}
        {errors.username && errors.username.message}
        <Label for="email">Email</Label>
        <Input
          type="text"
          value={editProfile.email}
          id="email"
          label="email"
          name="email"
          htmlFor="email"
          placeholder="Update Email"
          onChange={handleChange}
          ref={register({
            minLength: {
              value: 3,
              message: "Email is to short",
            },
          })}
        />
        {/* NOTE: Responsible for displaying the errors */}
        {errors.email && errors.email.message}
        <ButtonMobileContainer>
          <ButtonMobileIntro type="submit">Save</ButtonMobileIntro>
        </ButtonMobileContainer>
      </Form>
    </>
  );
};

export default ProfileForm;
