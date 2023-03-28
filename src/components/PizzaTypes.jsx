import React from 'react'
import PizzaCards from './PizzaCards';
import image5 from '../img/pizza5.jpg'
import image6 from '../img/pizza6.jpg'
import image7 from '../img/pizza7.jpg'
import image8 from '../img/pizza8.jpg'

const PizzaTypes = () => {
  return (
    <div class="container">
                <div class="row">
                    <h2 class="text-center fw-semibold mb-5">Pizza Types </h2>
                </div>
                <div class="row">
                    <div class="colmd">
                        <PizzaCards imgsr={image5} title="Vegeterian Pizza" />
                        <PizzaCards imgsr={image6} title="Pepperoni Pizza" />
                        <PizzaCards imgsr={image7} title="Cheeze Pizza" />
                        <PizzaCards imgsr={image8} title="#thnakU4Ex16 Pizza" /> 
                    </div>

                </div>
    </div>
  )
}

export default PizzaTypes
