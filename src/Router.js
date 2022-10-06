import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginDoyeon from './pages/doyeonKim/Login/Login';
import LoginEunji from './pages/eunjiKang/Login/Login';
import LoginJinhyeok from './pages/jinhyeokLee/Login/Login';
import MainDoyeon from './pages/doyeonKim/Main/Main';
import MainEunji from './pages/eunjiKang/Main/Main';
import MainJinhyeok from './pages/jinhyeokLee/Main/Main';
import './styles/reset.scss';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login-doyeon" element={<LoginDoyeon />} />
        <Route path="/login-eunji" element={<LoginEunji />} />
        <Route path="/login-jinhyeok" element={<LoginJinhyeok />} />
        <Route path="/main-doyeon" element={<MainDoyeon />} />
        <Route path="/main-eunji" element={<MainEunji />} />
        <Route path="/main-jinhyeok" element={<MainJinhyeok />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
