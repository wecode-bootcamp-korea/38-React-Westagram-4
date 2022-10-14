import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginBox = () => {
  const navigate = useNavigate();

  //아이디, 비밀번호
  const [values, setValues] = useState({
    id: '',
    password: '',
  });

  //value 설정
  const saveUserId = e => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  //validation 체크
  const validationCheck = () => {
    return values.id.includes('@') && values.password.length > 5;
  };

  const postLoginData = () => {
    fetch('http://westagram-signup.herokuapp.com/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    })
      .then(res => {
        if (!res.ok) {
          throw new Error(`로그인에서 ${res.status} 에러가 발생했습니다 `);
        }
        return res.json();
      })
      .then(result => {
        localStorage.setItem('token', result.token);
        alert('로그인 성공');
        navigate(`/main-jinhyeok`);
      })
      .catch(error => {
        console.log(error.message);
        alert('로그인 실패');
      });
  };

  return (
    <div className="loginBox">
      <h1 className="instaText">westagram</h1>
      <form>
        <input
          className="input"
          name="id"
          type="text"
          placeholder="전화번호, 사용자, 이름 또는 이메일"
          onChange={saveUserId}
        />
        <input
          className="input"
          name="password"
          type="password"
          placeholder="비밀번호"
          autoComplete="off"
          onChange={saveUserId}
        />
      </form>
      {validationCheck() ? (
        <button
          className="loginButton"
          onClick={() => {
            postLoginData();
          }}
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
