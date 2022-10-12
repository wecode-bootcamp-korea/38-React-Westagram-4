import React, { useEffect } from 'react';
import Nav from '../../../components/Nav/Nav';
import MainContentsBox from './Components/MainContentsBox';
import './Main.scss';

const MainJinhyeok = () => {
  useEffect(() => {
    const token = localStorage.getItem('token');

    fetch('https://westagram-signup.herokuapp.com/profile', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
      });
  }, []);

  return (
    <div className="main">
      <Nav />
      <MainContentsBox />
    </div>
  );
};

export default MainJinhyeok;
