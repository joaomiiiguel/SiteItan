import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css';
import './galeria.css';

export default class Galeria extends React.Component {
    items = [
        "https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png",
        "https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png",
        "https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png",
        "https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png",
        "https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png",
        "https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png",
    ]
    
    state = {
    galleryItems: this.items.map((i) => <img src={i} style={{width:"98%",display:"flex",justifyContent:"center", marginLeft: 15}}/>),
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