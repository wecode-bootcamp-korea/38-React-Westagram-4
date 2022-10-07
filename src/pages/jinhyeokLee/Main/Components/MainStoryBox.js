import React from 'react';
// import { fakeData } from '../../Shared/FakeData.js';

const MainStoryBox = () => {
  // const storyData = fakeData.storyData;
  const data = [
    {
      img: 'https://i.pinimg.com/originals/29/69/5a/29695a0cc4405b3ad1c950d6c804a36d.png',
      name: 'zi_nukk',
    },
    {
      img: 'https://i.pinimg.com/originals/29/69/5a/29695a0cc4405b3ad1c950d6c804a36d.png',
      name: 'zi_nukk',
    },
    {
      img: 'https://i.pinimg.com/originals/29/69/5a/29695a0cc4405b3ad1c950d6c804a36d.png',
      name: 'zi_nukk',
    },
    {
      img: 'https://i.pinimg.com/originals/29/69/5a/29695a0cc4405b3ad1c950d6c804a36d.png',
      name: 'zi_nukk',
    },
    {
      img: 'https://i.pinimg.com/originals/29/69/5a/29695a0cc4405b3ad1c950d6c804a36d.png',
      name: 'zi_nukk',
    },
    {
      img: 'https://i.pinimg.com/originals/29/69/5a/29695a0cc4405b3ad1c950d6c804a36d.png',
      name: 'zi_nukk',
    },
  ];
  return (
    <div className="storyWrapBox">
      {/* {storyData.map((cur, idx) => (
        <div className="storyBox" key={idx}>
          <div className="storyColorBox">
            <img className="storyImg" src={cur.img} alt="스토리사진" />
          </div>
          <p className="storyNickname">{cur.name}</p>
        </div>
      ))} */}
      {data.map((cur, idx) => (
        <div className="storyBox" key={idx}>
          <div className="storyColorBox">
            <img className="storyImg" src={cur.img} alt="스토리사진" />
          </div>
          <p className="storyNickname">{cur.name}</p>
        </div>
      ))}
    </div>
  );
};

export default MainStoryBox;
