import { useRef, useState } from 'react';
import './Login.scss';
import { useNavigate } from 'react-router-dom';

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
    setId('');
    setPassword('');
    reconfirm();
  };

  const isValid = (id.includes('@') || id.length > 5) && password.length > 5;

  const validate = () => {
    btn.current.style.backgroundColor = isValid
      ? 'black'
      : 'rgb(165, 205, 241)';
    isValid && setDisabled(false);
  };

  const reconfirm = () => {
    isValid && navigate('/main-eunji');
  };

  return (
    <main className="login_main">
      <div>
        <div className="logo">Westagram</div>
        <form className="login_form" onSubmit={onSubmit} onKeyUp={validate}>
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
          <button type="submit" disabled={disabled} id="submit_btn" ref={btn}>
            Sign In
          </button>
        </form>
        <span className="find_password">Forgot password</span>
      </div>
    </main>
  );
};

export default Login;
