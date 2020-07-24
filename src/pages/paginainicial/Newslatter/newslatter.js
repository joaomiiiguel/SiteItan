import React from 'react';
import './styles.css';

export default function Newslatter() {
  return (
      <div className="containerNews">
          <h3>Newslatter</h3>
          <p>Cadastre-se com seu e-mail e receba nosso boletim virtual com as principais novidade sobre o ITAN</p>
          <form style={{display: "flex", justifyContent:"space-around"}}>
            <label>
              <input type="email" name="email" placeholder="Digite seu e-mail"/>
            </label>
            <input type="submit" value="Enviar" />
          </form>
      </div>
  );
}