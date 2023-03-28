import React from 'react';
import image3 from '../img/pizza3.jpg'
import image2 from '../img/pizza2.jpg'
import image1 from '../img/pizza1.jpg'

const Carousel = () => {
  return (
    <div className="row" >
    <div id="carouselExampleControls" className="carousel slide pizzacarousel mb-4" data-bs-ride="carousel" >
        <div className="carousel-inner carouselhight">
            <div className="carousel-item active">
                <img src={image3} className="d-block " alt="..."/>
            </div>
            <div className="carousel-item">
                <img src={image2} className="d-block " alt="..."/>
            </div>
            <div className="carousel-item">
                <img src={image1} className="d-block " alt="..."/>
            </div>
        </div>
        <button className="carousel-control-prev pizzbut" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
        </button>
    </div>
</div>
  )
}

export default Carousel
