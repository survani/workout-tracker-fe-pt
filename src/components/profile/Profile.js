import React, { useState, useEffect } from 'react';
import Header from './header/Header';
import ProfileContext from '../../contexts/ProfileContext';
import { axiosWithAuth } from '../authentication/axiosWithAuth';
import { HeaderSection } from './style';
import { decode } from 'jsonwebtoken';

export default function Profile() {
  const [userInfo, setUserInfo] = useState({});

  const getUserInfo = () => {
    //provides the info for the specific user that is logged in.
    const { subject } = decode(localStorage.getItem('token'));
    axiosWithAuth()
      .get(`https://frozen-hamlet-18508.herokuapp.com/api/users/${subject}`)
      .then((res) => {
        setUserInfo(res.data);
        console.log('res.data', res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <ProfileContext.Provider value={{ userInfo }}>
      <HeaderSection>
        <Header />
      </HeaderSection>
    </ProfileContext.Provider>
  );
}
