import React from 'react';
import './HomeBanner.css';

import Banner from '../../../assets/imgs/BannerHomer.png'


function HomeBanner() {
  return(
    <div className="App-Banner">
        <div className="Area-Banner">
          <img src={Banner} className="BannerImg" />
        </div>
    </div>
    );
  }

export default HomeBanner;