import { useRef, useState } from 'react';
import './Login.scss';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const btn = useRef(null);
  const navigate = useNavigate();

  const onIdChange = e => {
    setId(e.target.value);
  };

  const onPasswordChange = e => {
    setPassword(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    setId('');
    setPassword('');
    validate();
  };

  const changeColor = () => {
    if ((id.includes('@') || id.length > 5) && password.length > 5) {
      btn.current.style.backgroundColor = 'black';
    } else {
      btn.current.style.backgroundColor = 'rgb(165, 205, 241)';
    }
  };

  const validate = () => {
    if (id == null || id === '') {
      alert('Please enter the email.');
      return false;
    } else if (!id.includes('@') || id.length < 5) {
      alert('Please enter a valid email address.');
      return false;
    } else if (password == null || password === '') {
      alert('Please enter the password.');
      return false;
    } else if (password.length < 6) {
      alert('Please enter a valid password');
    } else {
      alert('Welcome Back!');
      navigate('/main-eunji');
    }
  };

  return (
    <main className="login_main">
      <div>
        <div className="logo">Westagram</div>
        <form className="login_form" onSubmit={onSubmit} onKeyUp={changeColor}>
          <input
            type="email"
            value={id}
            onChange={onIdChange}
            required
            placeholder="Phone number, username, or email"
          />
          <input
            type="password"
            value={password}
            onChange={onPasswordChange}
            required
            placeholder="password"
          />
          <button type="submit" id="submit_btn" ref={btn}>
            Sign In
          </button>
        </form>
        <a href="#" className="find_password">
          Forgot password
        </a>
      </div>
    </main>
  );
};

export default Login;
