import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUpJinhyeok = () => {
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

  const postData = () => {
    fetch('http://westagram-signup.herokuapp.com/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    })
      .then(res => {
        if (res.ok) {
          console.log(res);
          return res.json();
        }
      })
      .then(result =>
        result.message === 'signup success'
          ? (alert('회원가입 성공'), navigate(`/login-jinhyeok`))
          : alert('회원가입 실패')
      );
  };

  // console.log(values);
  return (
    <div>
      <input name="id" type="text" onChange={saveUserId} />
      <input name="password" type="password" onChange={saveUserId} />
      <button onClick={postData}>회원가입</button>
    </div>
  );
};

export default SignUpJinhyeok;
