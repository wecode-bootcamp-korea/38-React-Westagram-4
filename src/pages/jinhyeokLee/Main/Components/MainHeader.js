import React, { useRef, useState } from 'react';
// import { fakeData } from '../../../../../public/leejinhyeok/data/FakeData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHeart,
  faCompass,
  faSquarePlus,
  faPaperPlane,
  faHouse,
} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const MainHeader = () => {
  const navigate = useNavigate();

  const [isActive, setIsActive] = useState(false);
  const [searchData, setSearchData] = useState([]);
  const [profileActive, setProfileActive] = useState(false);

  // const searchId = e => {
  //   const _searchData = fakeData.searchData.filter(cur =>
  //     cur.id.includes(e.target.value)
  //   );
  //   setSearchData(_searchData);
  //   console.log(searchData);
  // };

  return (
    <nav className="header">
      <div className="headerContentBox">
        <img
          className="logoImgBox"
          src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png"
          alt="인스타 로고"
        />
        <div className="searchBox">
          <input
            type="text"
            placeholder="검색"
            onFocus={() => {
              setIsActive(true);
            }}
            onBlur={() => {
              setIsActive(false);
            }}
            // onChange={e => {
            //   searchId(e);
            // }}
          />
          <img src="/public/leejinhyeok/static/searchImg.png" alt="검색사진" />
          {/* {isActive === true ? (
            searchData.length === 0 ? (
              <div className="searchToggle">
                {fakeData.searchData.map((cur, idx) => (
                  <div>
                    <img src={cur.img} alt="인스타사진" />
                    <div>
                      <p>{cur.id}</p>
                      <p>{cur.nickname}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="searchToggle">
                {searchData.map((cur, idx) => (
                  <div>
                    <img src={cur.img} alt="인스타사진" />
                    <div>
                      <p>{cur.id}</p>
                      <p>{cur.nickname}</p>
                    </div>
                  </div>
                ))}
              </div>
            )
          ) : null} */}
        </div>
        <div className="selectBox">
          <li>
            <FontAwesomeIcon icon={faHouse} size="lg" />
          </li>
          <li>
            <FontAwesomeIcon icon={faPaperPlane} size="lg" />
          </li>
          <li>
            <FontAwesomeIcon icon={faSquarePlus} size="lg" />
          </li>
          <li>
            <FontAwesomeIcon icon={faCompass} size="lg" />
          </li>
          <li>
            <FontAwesomeIcon icon={faHeart} size="lg" />
          </li>
          <li>
            <img
              src="https://i.pinimg.com/originals/29/69/5a/29695a0cc4405b3ad1c950d6c804a36d.png"
              alt="프로필이미지"
              onClick={() => {
                setProfileActive(!profileActive);
              }}
            />
            {profileActive === true ? (
              <div>
                <div>프로필</div>
                <div>저장됨</div>
                <div>모드 전환</div>
                <div>설정</div>
                <div>문제 신고</div>
                <div>계정 전환</div>
                <div
                  onClick={() => {
                    navigate(`/`);
                  }}
                  style={{ borderTop: '1px solid rgb(211,211,211)' }}
                >
                  로그아웃
                </div>
              </div>
            ) : null}
          </li>
        </div>
      </div>
    </nav>
  );
};

export default MainHeader;
