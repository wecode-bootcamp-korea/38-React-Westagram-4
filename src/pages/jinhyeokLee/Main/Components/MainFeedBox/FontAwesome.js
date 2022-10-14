import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as faSolidHeart } from '@fortawesome/free-solid-svg-icons';
const FontAwesome = () => {
  const [heartActive, setHeartActive] = useState(false);

  const handleHeartActive = () => {
    heartActive === false ? setHeartActive(true) : setHeartActive(false);
  };
  return (
    <FontAwesomeIcon
      icon={heartActive === false ? faHeart : faSolidHeart}
      onClick={handleHeartActive}
      color="red"
      style={{ marginRight: '15px', width: '15px' }}
    />
  );
};

export default FontAwesome;
