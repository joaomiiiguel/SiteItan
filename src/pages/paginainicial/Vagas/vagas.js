import React from 'react'
import './vagas.css'


export default function vagas() {
    const card = [
        {id:1, title:"Concursos PC RN e Itep RN iniciarão nova etapa licitatória, diz Sead", image: "https://admin.folhadirigida.com.br/filemanager/files/noticias/Fotos/Itep_RN_Foto_Itep_RN.jpg", link:"#"},
        {id:2, title:"Concurso Polícia Civil-RJ tem seis editais confirmados! 864 vagas e salário de até R$ 18 mil", image: "https://www.minutobiomedicina.com.br/uploads/posts/349/laboratorio-forense.jpg", link:"#"},
        {id:3, title:"Concurso PC PB: estudos para um novo certame estão em andamento", image: "https://blog-static.infra.grancursosonline.com.br/wp-content/uploads/2019/10/22130901/concurso-policia-civil-pb-destaque.jpg", link:"#"},
    ]
    const listCard = card.map((card) =>
            <a href={card.link} className="cardNews">
                <img src={card.image} className="imgNews"/>
                <h3 style={{marginTop:0}}>{card.title}</h3>
                <a href={card.link} className="moreNews"><p>Leia mais</p></a>
            </a>
);
    
    return (
        <div className="containerVagas">
            <h1>Oportunidades e Concursos</h1>
            <div className="containerListCard">{listCard}</div>
            <a href={'/concursos-vagas'} className="moreView"><p>Ver mais</p></a>
        </div>
    )
}
