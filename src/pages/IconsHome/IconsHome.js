import React from 'react'
import './IconsHome.css'

import iconCursoTec from '../../assets/iconCursoTec.svg';
import iconMatr from '../../assets/iconMatr.svg';
import iconDesc from '../../assets/iconDesc.svg';
import iconVagas from '../../assets/iconVagas.svg';
import iconLoja from '../../assets/iconLoja.svg';

export default function IconsHome() {
    return (
        <div className="App-Icons">
            <div className="container">
                <div className="container-icons">
                    <a href="#" className="link-icons">
                        <img src={iconCursoTec} alt="icons-home" className="img-icons"/>
                        <p className="name-icons">CURSO TECNICO EM NECROPSIA</p>
                    </a>
                </div>
                <div className="container-icons">
                    <a href="#" className="link-icons">
                        <img src={iconMatr} alt="icons-home" className="img-icons"/>
                        <p className="name-icons">PRÉ-MATRÍCULA</p>
                    </a>
                </div>
                <div className="container-icons">
                    <a href="#" className="link-icons">
                        <img src={iconDesc} alt="icons-home" className="img-icons"/>
                        <p className="name-icons">BOLSAS E DESCONTOS</p>
                    </a>
                </div>
                <div className="container-icons">
                    <a href="#" className="link-icons">
                        <img src={iconVagas} alt="icons-home" className="img-icons"/>
                        <p className="name-icons">CONCURSOS E SELEÇÕES</p>
                    </a>
                </div>
                <div className="container-icons">
                    <a href="#" className="link-icons">
                        <img src={iconLoja} alt="icons-home" className="img-icons"/>
                        <p className="name-icons">LOJA VIRTUAL</p>
                    </a>
                </div>
            </div>
        </div>
    )
}
