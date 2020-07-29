import React from 'react';
import './styles.css'
import HomeBanner from './HomeBanner/HomeBanner.js';
import IconsHome from './IconsHome/IconsHome.js';
import ITANMotivos from './ITANMotivos/itanmotivos.js';
import Newslatter from './Newslatter/newslatter.js';
import QuemSomos from './QuemSomos/QuemSomos.js';
import Depoimentos from './Depoimentos/depoimentos.js';
import Galeria from './Galeria/galeria.js';
import Noticias from './Noticias/noticias.js';
import Vagas from './Vagas/vagas.js';
import Eventos from './Eventos/eventos.js';
import Enquetes from './Enquetes/enquetes.js';
import Podcast from './Spotify/podcast.js';
import Midias from './RedeSocial/midias.js';
import Parceiros from './Parceiros/parceiros.js';
import MapaSite from './MapaSite/mapasite.js';


export default function paginainicial() {
    return (
        <div className="containerBody">
            <HomeBanner />
            <IconsHome />
            <div className="containerInicial">
                <div className="conteudosColumn">
                    <ITANMotivos/>
                    <QuemSomos/>
                    <Depoimentos/>
                    <Galeria/>
                    <Noticias/>
                    <Vagas/>
                    <Eventos/>
                </div>
                <div className="socialColumn">
                    <Newslatter/>
                    <Enquetes/>
                    <Podcast/>
                    <Midias/>
                    <Parceiros/>
                </div>
            </div>
            <MapaSite/>
        </div>
    )
}