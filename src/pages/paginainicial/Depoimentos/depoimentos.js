import React from 'react'
import './depoimentos.css'

import avataImg from '../../../assets/imgs/avataAluno.jpg';


export default function depoimentos() {
    return (
        <div className="containerDepo">
            <h1>Depoimentos de Alunos</h1>
            <div className="containerCards">
                <div className="cardDep">
                    <img src={avataImg} className="imgCard" alt="depoimentoAluno"/>
                    <div>
                        <p className="textDepo">"etiam tempor orci eu lobortis elementum nibh tellus molestie nunc non blandit massa enim"</p>
                        <h4 className="titleDepo">João Miguel</h4>
                    </div>
                </div>
                <div className="cardDep">
                    <img src={avataImg} className="imgCard" alt="depoimentoAluno"/>
                    <div>
                        <p className="textDepo">"scelerisque eu ultrices vitae auctor eu augue ut lectus arcu bibendum at varius vel pharetra"</p>
                        <h4 className="titleDepo">João Miguel</h4>
                    </div>
                </div>
                <div className="cardDep">
                    <img src={avataImg} className="imgCard" alt="depoimentoAluno"/>
                    <div>
                        <p className="textDepo">"scelerisque varius morbi enim nunc faucibus a pellentesque sit amet porttitor eget dolor mor"</p>
                        <h4 className="titleDepo">João Miguel</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}
