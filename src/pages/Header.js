import React from 'react';
import './Header.css';


import logo from '../assets/Logo.svg'
import facebook from '../assets/facebook.svg';
import instagram from '../assets/instagram.svg';
import twitter from '../assets/twitter.svg';
import spotify from '../assets/spotify.svg';
import youtube from '../assets/youtube.svg';
import portal from '../assets/portal.svg';


function Header(){
    function myFunction() {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
          x.className += " responsive";
        } else {
          x.className = "topnav";
        }
      }
    return(
    <div className="App-header">
        <div class="Header-Top">
            <div>
                <a href="#" class="linkSocial"><img src={facebook} className="logo-social" alt="social-face" /></a>
                <a href="#" class="linkSocial"><img src={instagram} className="logo-social" alt="social-instagram" /></a>
                <a href="#" class="linkSocial"><img src={youtube} className="logo-social" alt="social-youtube" /></a>
                <a href="#" class="linkSocial"><img src={spotify} className="logo-social" alt="social-spotify" /></a>
                <a href="#" class="linkSocial"><img src={twitter} className="logo-social" alt="social-twitter" /></a>
            </div>
            <div>
            <a href="#" class="linkPortal">
                <img src={portal} className="logo-social" alt="social-face" />
                <p style={{ paddingLeft:"5px", fontWeight:"bold" }}>PORTAL ADM</p>
            </a>
            </div>
        </div>
        <div class="Header-Menu">
            <img src={logo} className="App-logo" alt="logo" />
            <div class="topnav" id="myTopnav">
                <div class="dropdown">
                    <button class="dropbtn">O ITAN
                    <i class="fa fa-caret-down"></i>
                    </button>
                    <div class="dropdown-content">
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                    </div>
                </div>
                <div class="dropdown">
                    <button class="dropbtn">CURSOS
                    <i class="fa fa-caret-down"></i>
                    </button>
                    <div class="dropdown-content">
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                    </div>
                </div>
                <div class="dropdown">
                    <button class="dropbtn">COMUNICADOS
                    <i class="fa fa-caret-down"></i>
                    </button>
                    <div class="dropdown-content">
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                    </div>
                </div>
                <div class="dropdown">
                    <button class="dropbtn">CONTATO
                    <i class="fa fa-caret-down"></i>
                    </button>
                    <div class="dropdown-content">
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                    </div>
                </div>
                <a href="javascript:void(0);" class="icon" onclick="myFunction()">&#9776;</a>
            </div>
        </div>
    </div>
    );
}

export default Header;