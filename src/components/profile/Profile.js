import React, { useEffect, useState } from "react";
import NavigationBar from "../navigationbar/navigationbar";
import ProfileNav from "./profilenav/ProfileNav";
import ProfileSidebar from "./profilesidebar/ProfileSidebar";
import { decode } from "jsonwebtoken";
import { axiosWithAuth } from "../authentication/axiosWithAuth";
import ProfileContext from "../../contexts/ProfileContext";

const Profile = () => {
  const [userInfo, setUserInfo] = useState({});

  console.log("this run next");
  const getUserInfo = () => {
    //provides the info for the specific user that is logged in.
    const { subject } = decode(localStorage.getItem("token"));
    axiosWithAuth()
      .get(`https://frozen-hamlet-18508.herokuapp.com/api/users/${subject}`)
      .then((res) => {
        setUserInfo(res.data);
        console.log("res.data", res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getUserInfo();
  }, []);
  return (
    <>
      <ProfileContext.Provider value={{ userInfo, setUserInfo }}>
        <NavigationBar />
        <ProfileNav />
        <ProfileSidebar />
      </ProfileContext.Provider>
    </>
  );
};

export default Profile;
