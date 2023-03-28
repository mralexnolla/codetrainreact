import React from 'react';


const PizzaCards = ({imgsr, title}) => {
  return (
    
        <div className="card px-1 py-1 crd">
            <img src={imgsr} className="card-img-top" alt="..."/>
                    <div className="card-body">
                    <h5 className="card-title text-center">{title}</h5>
                <p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis molestiae quasi similique, quod placeat sequi quidem? Corporis praesentium magni mollitia!</p>
            </div>
        </div>
   
  )
}

export default PizzaCards
