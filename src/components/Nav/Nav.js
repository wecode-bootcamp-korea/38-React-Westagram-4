import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { userProfiles } from './userProfiles';
import './Nav.scss';

const Nav = () => {
  const [isShowing, setIsShowing] = useState(false);
  const [input, setInput] = useState('');

  const showMenu = () => {
    setIsShowing(prev => !prev);
  };

  const onChange = e => {
    setInput(e.target.value);
  };

  return (
    <header>
      <div className="wrapper">
        <div className="logo">
          <img src="/images/Nav/instagram.png" alt="logo" />
          <div>Westagram</div>
        </div>
        <div className="search">
          <input
            type="text"
            onChange={onChange}
            id="search_input"
            placeholder="Search"
          />
          <div className="search_result">
            {userProfiles
              .filter(el => {
                if (input == '') {
                  return false;
                } else if (el.username.toLowerCase().includes(input)) {
                  return el;
                }
              })
              .map(user => (
                <div key={user.id}>
                  <div>
                    <img src={user.userImg} />
                  </div>
                  <div>
                    {user.username} <p>{user.description}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <nav>
          <ul>
            <li>
              <img src="/images/Nav/explore.png" alt="explore" />
            </li>
            <li>
              <img src="/images/Nav/heart.png" alt="heart" />
            </li>
            <li>
              <img
                onClick={showMenu}
                src="/images/Nav/profile.png"
                alt="profile"
              />
              {isShowing && (
                <ul className="sub_nav">
                  <li
                    style={{ backgroundImage: 'url(/images/Nav/account.png)' }}
                  >
                    My account
                  </li>
                  <li
                    style={{ backgroundImage: 'url(/images/Nav/setting.png)' }}
                  >
                    Settings
                  </li>
                  <li
                    style={{ backgroundImage: 'url(/images/Nav/logout.png)' }}
                  >
                    <Link to="/">Log out</Link>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Nav;
