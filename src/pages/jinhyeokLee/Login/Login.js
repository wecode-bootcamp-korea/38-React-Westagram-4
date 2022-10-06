import React from 'react';
import LoginBox from './Components/LoginBox';
import LoginDownBox from './Components/LoginDownBox';
import LoginSignupBox from './Components/LoginSignupBox';
import '../Login/Login.scss';

const LoginJinhyeok = () => {
  return (
    <div className="login">
      <LoginBox />
      <LoginSignupBox />
      <LoginDownBox />
    </div>
  );
};

export default LoginJinhyeok;
