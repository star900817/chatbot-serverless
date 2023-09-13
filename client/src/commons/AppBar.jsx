import React, { useState } from 'react';
import { ReactComponent as NoticeIcon } from '../assests/icons/Notice.svg';
import { ReactComponent as Log } from '../assests/icons/Log.svg';
import './AppBar.css';
import header_icon from '../assests/icons/header-icon.png';

const AppBar = () => {
  return (
    <div className="appbar-wrapper">
      <div className="notice-icon">
        <span>
          <NoticeIcon />
        </span>
        <p className="badge rounded-pill bg-danger">1</p>
      </div>
      {/* <div className="log-icon">
            <img src={ header_icon } alt="no icon" />
            </div> */}
      {/* <button type="file" class="btn btn-outline-dark">SignOut</button> */}
      <div className="logout-btn">
        <button className="btn btn-outline-dark">Logout</button>
      </div>
    </div>
  );
};

export default AppBar;
