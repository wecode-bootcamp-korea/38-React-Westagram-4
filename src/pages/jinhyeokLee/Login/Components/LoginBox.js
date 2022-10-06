import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginBox = () => {
  //페이지 이동
  const navigate = useNavigate();

  //아이디, 비밀번호
  const [values, setValues] = useState({
    userId: '',
    userPassword: '',
  });

  //value 설정
  const saveUserId = props => e => {
    setValues({ ...values, [props]: e.target.value });
  };

  //validation 체크
  const validCheck = () => {
    return values.userId.includes('@') && values.userPassword.length > 5;
  };

  return (
    <div className="loginBox">
      <h1 className="instaText">westagram</h1>
      <form>
        <input
          className="input"
          onChange={saveUserId('userId')}
          type="text"
          placeholder="전화번호, 사용자, 이름 또는 이메일"
        />
        <input
          className="input"
          onChange={saveUserId('userPassword')}
          type="password"
          placeholder="비밀번호"
          autoComplete="off"
        />
      </form>
      {validCheck() ? (
        <button
          className="loginButton"
          onClick={() => navigate(`/main-jinhyeok`)}
        >
          로그인
        </button>
      ) : (
        <button className="loginButton" disabled>
          로그인
        </button>
      )}
      <div className="lineBox">
        <div className="line" />
        <div className="orBox">또는</div>
        <div className="line" />
      </div>
      <div className="facebookBox">
        <img src="/leejinhyeok/static/facebookLogo.png" alt="페이스북 로고" />
        <p>Facebook으로 로그인</p>
      </div>
      <p className="forgotPass">비밀번호를 잊으셨나요?</p>
    </div>
  );
};

export default LoginBox;
