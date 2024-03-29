import React from 'react';
import './Header.css';
import { BrowserRouter as Router, Switch, Route, Link, } from 'react-router-dom';

import Paginainicial from '../paginainicial/paginainicial.js';
import quemSomos from '../ITAN/QuemSomos/quemSomos.js';
import historico from '../ITAN/historico/historico.js';
import objetivos from '../ITAN/Objetivos/Objetivos.js';
import infra from '../ITAN/infra/infra.js';
import RespSocial from '../ITAN/RespSocial/respsocial.js';

import CursosTec from '../Cursos/CursosTec/CursosTec.js';
import CursosLivre from '../Cursos/CursosLivre/CursosLivre.js';
import PrepConcurso from '../Cursos/PrepConcurso/PrepConcurso.js';
import CursosEaD from '../Cursos/CursosEaD/CursosEaD.js';

import Noticias from '../Comunic/Noticias/Noticias.js';
import ConcursoVagas from '../Comunic/ConcursoVagas/ConcursoVagas.js';
import Eventos from '../Comunic/Eventos/Eventos.js';

import PergFrequente from '../Contato/PergFrequentes/PergFrequentes.js';
import Ouvidoria from '../Contato/Ouvidoria/Ouvidoria.js';
import FaleConosco from '../Contato/FaleConosco/FaleConosco.js';
import MapaSite from '../MapaSite/mapasite.js';


import logo from '../../assets/Logo.svg'
import facebook from '../../assets/facebook.svg';
import instagram from '../../assets/instagram.svg';
import twitter from '../../assets/twitter.svg';
import spotify from '../../assets/spotify.svg';
import youtube from '../../assets/youtube.svg';
import portal from '../../assets/portal.svg';
import studentPortal from '../../assets/studentPortal.svg';




const Header = () => {
    function myFunction() {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
            x.className += "responsive";
        } else {
            x.className = "topnav";
        }
    }
    return (
        <Router>
            <div className="App-header">
                <div className="Header-Top">
                    <div style={{ float: "left" }}>
                        <a href="https://www.instagram.com/itan.cursos/" target="_blank" className="linkSocial"><img src={instagram} className="logo-social" alt="social-instagram" /></a>
                        <a href="https://www.facebook.com/itan.cursos/" target="_blank" className="linkSocial"><img src={facebook} className="logo-social" alt="social-face" /></a>
                        <a href="#" target="_blank" className="linkSocial"><img src={youtube} className="logo-social" alt="social-youtube" /></a>
                        <a href="#" target="_blank" className="linkSocial"><img src={spotify} className="logo-social" alt="social-spotify" /></a>
                        <a href="#" target="_blank" className="linkSocial"><img src={twitter} className="logo-social" alt="social-twitter" /></a>
                    </div>
                    <div className="Portal">
                        <a className="linkPortal" target="_blank" href="https://www.proesc.com/app" >
                            <img src={studentPortal} className="logo-social" alt="logo-portal" />
                            <p>Portal do Aluno</p>
                        </a>
                        <a className="linkPortal" target="_blank" href="#" >
                            <img src={portal} className="logo-social" alt="logo-portal" />
                            <p>Portal ADM</p>
                        </a>
                    </div>
                </div>
                <div className="Header-Menu">
                    <Link to="/" ><img src={logo} className="App-logo" alt="logo" /></Link>
                    <div className="topnav" id="myTopnav">
                        <div className="dropdown">
                            <button className="dropbtn">O ITAN
                            </button>
                            <div className="dropdown-content">
                                <Link to="/quem-somos">Quem Somos</Link>
                                <Link to="/historico">Histórico</Link>
                                <Link to="/objetivos">Objetivos</Link>
                                <Link to="/infra">Infraestrutura</Link>
                                <Link to="/resp-social">Responsabilidade Social</Link>
                            </div>
                        </div>
                        <div className="dropdown">
                            <button className="dropbtn">CURSOS
                            </button>
                            <div className="dropdown-content">
                                <Link to="/cursos-tec"> Cursos Técnicos</Link>
                                <Link to="/cursos-livres">Cursos Livres</Link>
                                <Link to="/prep-concurso">Preparatórios para Concursos</Link>
                                <Link to="/cursos-EaD">Cursos EaD</Link>
                            </div>
                        </div>
                        <div className="dropdown">
                            <button className="dropbtn">COMUNICADOS
                            </button>
                            <div className="dropdown-content">
                                <Link to="/noticias">Notícias</Link>
                                <Link to="/concursos-vagas">Concursos e Vagas</Link>
                                <Link to="/eventos">Eventos</Link>
                            </div>
                        </div>
                        <div className="dropdown">
                            <button className="dropbtn">CONTATO
                            </button>
                            <div className="dropdown-content">
                                <Link to="/perg-frequentes">Perguntas Frequentes</Link>
                                <Link to="/ouvidoria">Ouvidoria</Link>
                                <Link to="/fale-conosco">Fale Conosco</Link>
                            </div>
                        </div>
                        <a href="javascript:void(0);" className="icon" onClick={() => myFunction()}>&#9776;</a>
                    </div>
                </div>
            </div>
            <Switch>
                <Route path="/" exact component={Paginainicial} />
                <Route path="/quem-somos" component={quemSomos} />
                <Route path="/historico" component={historico} />
                <Route path="/objetivos" component={objetivos} />
                <Route path="/infra" component={infra} />
                <Route path="/resp-social" component={RespSocial} />

                <Route path="/cursos-tec" component={CursosTec} />
                <Route path="/cursos-livres" component={CursosLivre} />
                <Route path="/prep-concurso" component={PrepConcurso} />
                <Route path="/cursos-EaD" component={CursosEaD} />

                <Route path="/noticias" component={Noticias} />
                <Route path="/concursos-vagas" component={ConcursoVagas} />
                <Route path="/eventos" component={Eventos} />

                <Route path="/perg-frequentes" component={PergFrequente} />
                <Route path="/ouvidoria" component={Ouvidoria} />
                <Route path="/fale-conosco" component={FaleConosco} />
            </Switch>

            <MapaSite />
        </Router>
    );
}

export default Header;