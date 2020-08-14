import React from 'react';
import '../styles.css';

export default function Noticias() {
    const card = [
        {id:1, title:"O que é um artigo cientísfico as scomo ele é usado na faculdade?", image: "https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png", link:"#"},
        {id:2, title:"Conheça alguns dos cursos mais valorizados no mercadoss", image: "https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png", link:"#"},
        {id:3, title:"Sdciar as fasdasdomras dauldm", image: "https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png", link:"#"},
        {id:4, title:"Sdciar as fasdasdomras dauldm", image: "https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png", link:"#"},
        {id:5, title:"Sdciar as fasdasdomras dauldm", image: "https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png", link:"#"},
        {id:6, title:"Sdciar as fasdasdomras dauldm", image: "https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png", link:"#"},
    ]
    const listCard = card.map((card) =>
            <a href={card.link} className="cardNews">
                <img src={card.image} className="imgNews"/>
                <h3 style={{marginTop:0}}>{card.title}</h3>
                <a href={card.link} className="moreNews"><p>Leia mais</p></a>
            </a>
    );

    
    return (
        <div className="Container">
            <h1>Notícias</h1>
            <div className="containerListCard">{listCard}</div>
        </div>
    )
}
