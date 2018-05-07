import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import BannerImg from './BannerImg';
import BannerFooter from './BannerFooter';
import Icons from './Icons';

const App = () => {
  return (
    <div className ="container">
      <Header />
      <BannerImg />
      <BannerFooter />
      <Icons />
    </div>  
  )
};

export default App;
