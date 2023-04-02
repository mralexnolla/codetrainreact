import React from 'react'
import Cards from './Cards'

const PlacesCard = () => {
    let cardImg1 = "img/cmplace.jpeg";
    let cardImg2 = "img/ngplace.webp";
    let cardImg3 = "img/ghplace.webp";
    let cardImg4 = "img/cmplace1.jpeg";
  return (
    <div className="row cardbg">
      <Cards imgsrc= {cardImg1}/>
      <Cards imgsrc= {cardImg2}/>
      <Cards imgsrc= {cardImg3}/>
      <Cards imgsrc= {cardImg4}/>
      
    </div>
  )
}

export default PlacesCard
