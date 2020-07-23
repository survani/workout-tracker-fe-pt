import React, { useContext } from "react";
import {Input, Links, Logo, LogoText, Navigation, RightSide, SearchIcons, SubNav} from "./style";
import ProfileContext from "../../../contexts/ProfileContext";
import DefaultAvatar from "../../../assets/profilepage/defaultavatar.svg";
import SearchIcon from "../../../assets/profilepage/searchicon.svg";
const ProfileNav = () => {
  const { userInfo } = useContext(ProfileContext);

  return (
    <>
      <Navigation>
        <Logo>
          Welcome! <LogoText>{userInfo.username}</LogoText>
        </Logo>
        <RightSide>
          <Input type="text" placeholder="Type something..."/>
            <SearchIcons src={SearchIcon}/>

          <img src={DefaultAvatar} />
        </RightSide>
      </Navigation>
      <SubNav>
        <Links> Edit Profile </Links>
        <Links> Account Information </Links>
        <Links> Security </Links>
        <Links> Payment Information </Links>
      </SubNav>
    </>
  );
};

export default ProfileNav;
