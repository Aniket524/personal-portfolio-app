import React from 'react';
import SocialContact from '../../common/social-contact/SocialContact';
import "./about.css";

const About = () => {
  return <div className='about'>
    <div className="about-top">
      <div className="about-info">
        Hello There ,I am 💪<br /> <span className='info-name'>Aniket</span> , <br /> I love doing my work
      </div>
      <div className="about-photo">
        <img src={require('../../../assets/coding.png')} className='picture'/>
      </div>
    </div>
    <div className="about-bottom">
      <SocialContact />
    </div>
  </div>;
};

export default About;
