// MainMenuButton.js

import React from 'react';
import { Link } from 'react-router-dom';
import homeIcon from 'src/images/home-icon.png';

const MainMenuButton = () => {  
  return (
    <Link to="/">
      <img src={homeIcon} alt="Home" style={{ width: '30px', height: '30px' }} />
    </Link>
  );
};

export default MainMenuButton;
