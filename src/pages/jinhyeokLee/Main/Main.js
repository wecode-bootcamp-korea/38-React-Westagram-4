import React from 'react';
import Nav from '../../../components/Nav/Nav';
import MainContentsBox from './Components/MainContentsBox';
import './Main.scss';

const MainJinhyeok = () => {
  return (
    <div className="main">
      <Nav />
      <MainContentsBox />
    </div>
  );
};

export default MainJinhyeok;
