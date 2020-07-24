import React from 'react';
import './styles.css'
import HomeBanner from './HomeBanner/HomeBanner.js';
import IconsHome from './IconsHome/IconsHome.js';
import ITANMotivos from './ITANMotivos/itanmotivos.js';
import Newslatter from './Newslatter/newslatter.js';

export default function paginainicial() {
    return (
        <div className="containerBody">
            <HomeBanner />
            <IconsHome />
            <div className="containerInicial">
                <div className="conteudosColumn">
                    <ITANMotivos/>
                </div>
                <div className="socialColumn">
                    <Newslatter/>
                </div>
            </div>
        </div>
    )
}