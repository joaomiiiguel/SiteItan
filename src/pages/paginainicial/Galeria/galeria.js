import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css';
import './galeria.css';

import img1 from '../Galeria/Fotos/imagem1.jpeg';
import img2 from '../Galeria/Fotos/imagem2.jpg';
import img3 from '../Galeria/Fotos/imagem3.jpg';
import img4 from '../Galeria/Fotos/imagem4.jpg';
import img5 from '../Galeria/Fotos/imagem5.jpg';
import img6 from '../Galeria/Fotos/imagem6.jpg';
import img7 from '../Galeria/Fotos/imagem7.jpg';
import img8 from '../Galeria/Fotos/imagem8.jpg';
import img9 from '../Galeria/Fotos/imagem9.jpg';
import img10 from '../Galeria/Fotos/imagem10.jpg';

export default class Galeria extends React.Component {
    items = [ img1, img2, img3, img4, img5, img6, img7, img8, img9, img10]
    
    state = {
    galleryItems: this.items.map((i) => <img src={i} style={{width:"98%",height:"40vh" ,display:"flex",justifyContent:"center", marginLeft: 15}}/>),
  }

  responsive = {
    0: { items: 1 },
    1024: { items: 3 },
  }

  onSlideChange(e) {
    console.debug('Item`s position during a change: ', e.item)
    console.debug('Slide`s position during a change: ', e.slide)
  }

  onSlideChanged(e) {
    console.debug('Item`s position after changes: ', e.item)
    console.debug('Slide`s position after changes: ', e.slide)
  }

  render() {
    return (
    <div className="containerFoto">
        <h1>Galeria de Fotos</h1>
        <AliceCarousel
            items={this.state.galleryItems}
            responsive={this.responsive}
            autoPlayInterval={5000}
            autoPlayDirection="rtl"
            autoPlay={true}
            fadeOutAnimation={true}
            mouseTrackingEnabled={false}
            playButtonEnabled={false}
            disableAutoPlayOnAction={true}
            onSlideChange={this.onSlideChange}
            onSlideChanged={this.onSlideChanged}
        />
    </div>
    )
  }
}