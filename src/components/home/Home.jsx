import React from 'react';
import "./home.css"
import Header from '../header/Header'
import Body from '../body/Body';
import Footer from '../footer/Footer';

const Home = () => {
  return <div className='home'>
      <div className="home-wrapper">
          <div className="header">
            <Header />
          </div>
          <div className="body">
            <Body />
          </div>
          <div className="footer">
            <Footer />
          </div>
      </div>
  </div>;
};

export default Home;
