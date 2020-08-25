import React from 'react'
import './noticias.css'


export default function noticias() {
    const card = [
        {id:1, title:"Em tempos de covid, técnicos em necropsia pedem reconhecimento: 'somos linha de frente também'", image: "https://cdn.topmidianews.com.br/img/pc/620/320/dn_noticia/2020/05/tecnico-necropsia.jpg", link:"#"},
        {id:2, title:"Novas técnicas permitem identificação de cadáveres em situações especiais", image: "https://www.medicina.ufmg.br/wp-content/uploads/sites/7/2020/01/topinho.jpg", link:"#"},
        {id:3, title:"Pandemia de coronavírus: como fazer declaração de óbito e manejo de corpos?", image: "https://img.pebmed.com.br/wp-content/uploads/2020/03/24103810/coronavirus_necropsia.jpg", link:"#"},
        {id:4, title:"Como a pandemia mudou a rotina de velórios e sepultamentos", image: "https://jornal.usp.br/wp-content/uploads/2020/01/20200131_00_coronavirus1.jpg", link:"#"},
        {id:5, title:"Profissionais de saúde incapacitados pela covid-19 poderão receber indenização", image: "https://www.nexojornal.com.br/incoming/imagens/cemiterio/alternates/LANDSCAPE_640/cemiterio", link:"#"},
        {id:6, title:"Técnico de Necropsia: saiba mais sobre as funções, faixa salarial, carga horária e mais!", image: "https://www.colegiomarquesdeolinda.com.br/wp-content/uploads/2020/07/01card1-e1595451799313-999x6001-1.jpg", link:"#"},
    ]
    const listCard = card.map((card) =>
            <a href={card.link} className="cardNews">
                <img src={card.image} className="imgNews"/>
                <h3 style={{marginTop:0}}>{card.title}</h3>
                <a href={card.link} className="moreNews"><p>Leia mais</p></a>
            </a>
    );
    
    return (
        <div className="containerNews">
            <h1>Últimas Notícias</h1>
            <div className="containerListCard">{listCard}</div>
            <a href={'/noticias'} className="moreView"><p>Ver mais</p></a>
        </div>
    )
}
