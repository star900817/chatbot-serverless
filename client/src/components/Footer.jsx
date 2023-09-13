import React from 'react';
import icon from '../assests/icons/download.png';

const Footer = () => {
  return (
    <>
      <div>
        <a href="/#">Copyright 1999-2023</a> by Refsnes Data. All Rights
        Reserved.
      </div>
      <a href="/#">
        <img src={icon} alt="no icon" />
      </a>
    </>
  );
};

export default Footer;
