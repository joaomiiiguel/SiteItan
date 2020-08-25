import React from 'react'
import './depoimentos.css'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css';


export default class Depoimentos extends React.Component {
    items = [
        {nome:'João Miguel',depo: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', avata:'https://conteudo.imguol.com.br/c/entretenimento/d3/2018/12/20/felipe-romao-26-de-carapicuiba-percebi-como-as-mulheres-precisam-abrir-mao-de-coisas-por-seguranca-1545328793231_v2_450x450.jpg'},
        {nome:'Mallu Trigueiro',depo: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', avata:'https://conteudo.imguol.com.br/c/entretenimento/4d/2020/01/28/catherine-gray-1580221882516_v2_450x600.jpg'},
        {nome:'Laura Alves',depo: 'alskdjalskdjalksdjalskd jalksjd', avata:'https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png'},
        {nome:'Everton Silva',depo: 'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ', avata:'https://instagram.fjdo10-1.fna.fbcdn.net/v/t51.2885-19/s320x320/87238521_199057691372652_166843429156814848_n.jpg?_nc_ht=instagram.fjdo10-1.fna.fbcdn.net&_nc_ohc=jiMTOPqNON4AX-ICrRp&oh=1fb42993ee36fd27bb74767a58e8399f&oe=5F6AE73F'},
        {nome:'joao miguel',depo: 'alskdj alskdjalksdjalskdjalksjd', avata:'https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png'},
        {nome:'joao miguel',depo: 'aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat in fermentum posuere urna nec tincidunt praesent semper feugiat nibh sed pulvinar proin gravida hendrerit', avata:'https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png'},
    ]
    
    state = {
    galleryItems: this.items.map((i) => 
    <div className="containerDepo">
        <img className="imgCard" src={i.avata}/>
        <h3 className="textDepo">{i.depo}</h3>
        <p className="titleDepo">{i.nome}</p></div>),
  }

  responsive = {
    0: { items: 1 },
    1024: { items: 1 },
  }

  render() {
    return (
    <div className="containerFoto">
        <h1>Depoimentos dos Alunos</h1>
        <AliceCarousel
            items={this.state.galleryItems}
            responsive={this.responsive}
            autoPlayInterval={5000}
            autoPlayDirection="rtl"
            autoPlay={true}
            fadeOutAnimation={true}
            mouseTrackingEnabled={true}
            playButtonEnabled={false}
            disableAutoPlayOnAction={false}
        />
        </div>
    )
  }
}
