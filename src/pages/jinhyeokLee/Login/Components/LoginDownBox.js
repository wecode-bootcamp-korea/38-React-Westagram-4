import React from 'react';

const LoginDownBox = () => {
  return (
    <div>
      <p className="downloadText">앱을 다운로드 하세요.</p>
      <div className="downloadBox">
        <img
          src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_korean-ko.png/4a5c9d62d51b.png"
          alt="다운로드애플"
        />
        <img
          src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_korean-ko.png/f155b664a93b.png"
          alt="다운로드구글"
        />
      </div>
    </div>
  );
};

export default LoginDownBox;
