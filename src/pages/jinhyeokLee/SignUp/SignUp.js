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
  const saveUserId = props => e => {
    setValues({ ...values, [props]: e.target.value });
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
        if (!res.ok) {
          throw new Error(`회원가입 ${res.status} 에러가 발생했습니다`);
        }
        return res.json();
      })
      .then(result =>
        result.message === 'signup success'
          ? (alert('회원가입 성공'), navigate(`/login-jinhyeok`))
          : alert('회원가입 실패')
      )
      .catch(error => {
        console.log(error.mesasge);
        alert('회원가입 실패');
      });
  };

  // console.log(values);
  return (
    <div>
      <input type="text" onChange={saveUserId('id')} />
      <input type="password" onChange={saveUserId('password')} />
      <button onClick={postData}>회원가입</button>
    </div>
  );
};

export default SignUpJinhyeok;
