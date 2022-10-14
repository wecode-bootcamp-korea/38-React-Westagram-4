import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

const Login = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [disabled, setDisabled] = useState(true);
  const btn = useRef(null);
  const navigate = useNavigate();

  const saveUserId = e => {
    setId(e.target.value);
  };

  const saveUserPwd = e => {
    setPassword(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();

    fetch('http://10.58.52.130:3000/auth/signin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: id, password: password }),
    })
      .then(res => {
        if (res.ok === true) {
          return res.json();
        }
      })
      .then(data => {
        localStorage.setItem('token', data.accessToken);
        navigate('/main-eunji');
      });

    setId('');
    setPassword('');
  };

  const signUp = e => {
    e.preventDefault();
    fetch('http://10.58.52.130:3000/auth/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
      body: JSON.stringify({ email: id, password: password }),
    }).then(res => {
      if (res.ok) {
        return res.json();
      }
      throw new Error('에러 발생!');
    });
  };

  const isValid = (id.includes('@') || id.length > 5) && password.length > 5;

  const validate = () => {
    btn.current.style.backgroundColor = isValid ? 'black' : 'rgb(50, 126, 240)';
    isValid && setDisabled(false);
  };

  return (
    <main className="login_main">
      <div>
        <div className="logo">Westagram</div>
        <form className="login_form" onKeyUp={validate}>
          <input
            type="email"
            value={id}
            onChange={saveUserId}
            required
            placeholder="Phone number, username, or email"
          />
          <input
            type="password"
            value={password}
            onChange={saveUserPwd}
            required
            placeholder="password"
          />
          <button
            type="submit"
            disabled={disabled}
            id="submit_btn"
            ref={btn}
            onClick={onSubmit}
          >
            Log In
          </button>
          <button onClick={signUp}>Sign Up</button>
        </form>
        <span className="find_password">Forgot password</span>
      </div>
    </main>
  );
};

export default Login;
