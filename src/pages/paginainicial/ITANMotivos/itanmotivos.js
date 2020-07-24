import React from 'react';
import './styles.css';

import primNE from '../../../assets/primNE.svg';
import profGrad from '../../../assets/profGrad.svg';
import AVA from '../../../assets/AVA.svg';
import macaIcon from '../../../assets/macaIcon.svg';

export default function ITANMotivos() {
  return (
    <div>
      <p style={{textAlign:"center", fontSize:30, color:"#2E3D61", paddingTop:20}}>Motivos para escolher <b>o ITAN</b></p>
      <div className="containerMot">
          <div className="cardMot">
            <img src={primNE} className="iconsMot"/>
            <p>Primeiro Curso Técnico em Necropsia do Nordeste</p>
          </div>
          <div className="cardMot">
            <img src={profGrad} className="iconsMot"/>
            <p>A Maioria dos Professores são Mestres e Doutores</p>
          </div>
          <div className="cardMot">
            <img src={AVA} className="iconsMot"/>
            <p>Ambiente Virtual exclusivo do Aluno</p>
          </div>
          <div className="cardMot">
            <img src={macaIcon} className="iconsMot"/>
            <p>Práticas com Cadáveres Reais</p>
          </div>
      </div>
      </div>
  );
}