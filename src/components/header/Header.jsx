import React, { useState } from 'react';
import "./header.css";
import Web from'./web/Web'
import Mobile from './mobile/Mobile';

const Header = () => {
  const [isopen,setIsopen]=useState(false);
  return <div className='header-wrapper'>
      <div className="logo">
        Aniket Karpe
      </div>
      <div className="menu">
        <div className="web-menu">
            <Web />
        </div>
        <div className="mob-menu">
            <div className="bar" onClick={()=>{setIsopen(!isopen)}}>
              <i class="fi fi-rr-apps menu-icon"></i>
            </div>
            {isopen && <Mobile isopen={isopen} setIsopen={setIsopen}/>}
        </div>
      </div>
  </div>;
};

export default Header;
