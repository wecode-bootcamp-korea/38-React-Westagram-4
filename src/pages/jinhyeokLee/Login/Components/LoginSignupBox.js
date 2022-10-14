import React from 'react';
import { useNavigate } from 'react-router-dom';

const LoginSignupBox = () => {
  const navigate = useNavigate();

  return (
    <div className="accountBox">
      <p
        onClick={() => {
          navigate(`/signup-jinhyeok`);
        }}
      >
        계정이 없으신가요? <span>가입하기</span>
      </p>
    </div>
  );
};

export default LoginSignupBox;
