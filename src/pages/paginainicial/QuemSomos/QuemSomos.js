import React from 'react'
import './quemsomos.css'

import Foto from '../Galeria/Fotos/imagem3.jpg'

export default function QuemSomos() {
    return (
        <div className="containerAbout">
            <h1 style={{textAlign:"center"}}>Quem Somos</h1>
            <div className="AboutLine">
                    <img src={Foto} className="PhotoImg"/>    
                    <p class="textAbout">O ITAN – Instituto Técnico de Anatomia e Necropsia é uma instituição que foi criada com o intuito de atender as demandas educacionais do mercado, superando as expectativas dos profissionais e parceiros, através de projetos educacionais diferenciados e com um corpo docente altamente qualificado e com ampla experiência empírica. Levando desta forma aos alunos assuntos que poderão ser colocados em prática de forma imediata, sejam nas pós-graduações ou mesmo cursos de curta duração, que atenderão a necessidades pontuais do mercado. Levar aos nossos alunos conteúdo de alta qualidade, transformando estas pessoas em profissionais melhores, contribuímos com o crescimento qualitativo de nosso país, tornando o presente melhor e aumentando a perspectiva de um futuro promissor. Isto nos inspira a cada novo dia!</p>
            </div>
        </div>
    )
}
