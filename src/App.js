import React from 'react';
import './App.css';
import Header from './pages/Header/Header.js';
import HomeBanner from './pages/HomeBanner/HomeBanner.js';
import IconsHome from './pages/IconsHome/IconsHome.js';

function App() {
  return (
    <div>
      <Header/>
      <HomeBanner />
      <IconsHome />
    </div>
  );
}

export default App;
