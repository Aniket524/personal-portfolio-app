import React from 'react';
import "./contact.css"
import Separator from '../../common/separater/Separator';
import SocialContct from '../../common/social-contact/SocialContact'

const Contact = () => {
  return <div className='contact'>
    <Separator />
    <label className='section-title'>Contact</label>
    <div className="contact-container">
      <div className="contact-left">
        <p>If any queries contact me </p>
        <SocialContct />
      </div>
      <div className="download">
        <a download href={require('../../../assets/AniketKarpe_resume.pdf').default}>
          <i class="fi fi-rr-download"></i>
          Download Resume
        </a>
      </div>
    </div>
  </div>;
};

export default Contact;
