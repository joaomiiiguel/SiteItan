import React from 'react';
import './Header.css';


import logo from '../../assets/Logo.svg'
import facebook from '../../assets/facebook.svg';
import instagram from '../../assets/instagram.svg';
import twitter from '../../assets/twitter.svg';
import spotify from '../../assets/spotify.svg';
import youtube from '../../assets/youtube.svg';
import portal from '../../assets/portal.svg';
import chevronDown from '../../assets/chevron-down.svg';



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
            <div style={{ float:"left" }}>
                <a href="#" class="linkSocial"><img src={facebook} className="logo-social" alt="social-face" /></a>
                <a href="#" class="linkSocial"><img src={instagram} className="logo-social" alt="social-instagram" /></a>
                <a href="#" class="linkSocial"><img src={youtube} className="logo-social" alt="social-youtube" /></a>
                <a href="#" class="linkSocial"><img src={spotify} className="logo-social" alt="social-spotify" /></a>
                <a href="#" class="linkSocial"><img src={twitter} className="logo-social" alt="social-twitter" /></a>
            </div>
            <div class="Portal">
                <a href="#" class="linkPortal">
                    <img src={portal} className="logo-social" alt="logo-portal" />
                    <p style={{ paddingLeft:"15px", fontWeight:"bold" }}>PORTAL ADM</p>
                </a>
            </div>
        </div>
        <div class="Header-Menu">
            <img src={logo} className="App-logo" alt="logo" />
            <div class="topnav" id="myTopnav">
                <div class="dropdown">
                    <button class="dropbtn">O ITAN
                    </button>
                    <div class="dropdown-content">
                        <a href="#">Quem Somos</a>
                        <a href="#">Histórico</a>
                        <a href="#">Objetivos</a>
                        <a href="#">Infraestrutura</a>
                        <a href="#">Responsabilidade Social</a>
                    </div>
                </div>
                <div class="dropdown">
                    <button class="dropbtn">CURSOS
                    </button>
                    <div class="dropdown-content">
                        <a href="#">Cursos Técnicos</a>
                        <a href="#">Cursos Livres</a>
                        <a href="#">Preparatórios para Concursos</a>
                        <a href="#">Cursos EaD</a>
                    </div>
                </div>
                <div class="dropdown">
                    <button class="dropbtn">COMUNICADOS
                    </button>
                    <div class="dropdown-content">
                        <a href="#">Notícias</a>
                        <a href="#">Concursos e Vagas</a>
                        <a href="#">Eventos</a>
                    </div>
                </div>
                <div class="dropdown">
                    <button class="dropbtn">CONTATO
                    </button>
                    <div class="dropdown-content">
                        <a href="#">Perguntas Frequentes</a>
                        <a href="#">Ouvidoria</a>
                        <a href="#">Fale Conosco</a>
                    </div>
                </div>
                <a href="javascript:void(0);" class="icon" onclick="myFunction()">&#9776;</a>
            </div>
        </div>
    </div>
    );
}

export default Header;