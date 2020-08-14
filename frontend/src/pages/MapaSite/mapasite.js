import React from 'react'
import './mapasite.css'

import facebook from '../../assets/facebook.svg';
import instagram from '../../assets/instagram.svg';
import twitter from '../../assets/twitter.svg';
import spotify from '../../assets/spotify.svg';
import youtube from '../../assets/youtube.svg';

export default function mapasite() {
    return (
        <div className="containerMap">
            <div className="MapContainer">
                <a className="TituloMap" >ITAN</a>
                <a href="/quem-somos">Quem Somos</a>
                <a href="/historico">Histórico</a>
                <a href="/objetivos">Objetivos</a>
                <a href="/infra">Infraestrutura</a>
                <a href="/resp-social">Responsabilidade Social</a>
            </div>
            <div className="MapContainer">
            <a className="TituloMap">CURSOS</a>
                <a href="/cursos-tec"> Cursos Técnicos</a>
                <a href="/cursos-livres">Cursos Livres</a>
                <a href="/prep-concurso">Preparatórios para Concursos</a>
                <a href="/cursos-EaD">Cursos EaD</a>
            </div>
            <div className="MapContainer">
            <a className="TituloMap">COMUNICADOS</a>
                <a href="/noticias">Notícias</a>
                <a href="/concursos-vagas">Concursos e Vagas</a>
                <a href="/eventos">Eventos</a>
            </div>
            <div className="MapContainer">
            <a className="TituloMap">CONTATO</a>
                <a href="/perg-frequentes">Perguntas Frequentes</a>
                <a href="/ouvidoria">Ouvidoria</a>
                <a href="/fale-conosco">Fale Conosco</a>
            </div>
            <div className="MapContainer">
            <a className="TituloMap">MÍDIAS SOCIAIS</a>
                <a href="https://www.facebook.com/itan.cursos/" target="_blank" class="MapSocial"><img src={facebook} className="logo-social" alt="social-face" />Curta nosso Facebook</a>
                <a href="https://www.instagram.com/itan.cursos/" target="_blank" class="MapSocial"><img src={instagram} className="logo-social" alt="social-instagram" />Siga o nosso Instagram</a>
                <a href="#" class="MapSocial"><img src={youtube} className="logo-social" alt="social-youtube" />Veja nosso canal no Youtube</a>
                <a href="#" class="MapSocial"><img src={spotify} className="logo-social" alt="social-spotify" />Ouça nossos Podcasts</a>
                <a href="#" class="MapSocial"><img src={twitter} className="logo-social" alt="social-twitter" />Acompanhe nosso Twitter</a>
            </div>
        </div>
    )
}
