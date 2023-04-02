import React from 'react'

const Cards = ({imgsrc}) => {
  return (
    <div className="col-md-3 ">
                <div className="card cardwrap" style={{width: "18rem"}}>
                    <img src={imgsrc} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae nostrum voluptates, ullam tempore excepturi aut?.</p>
                    </div>
                  </div>
            </div>
  )
}

export default Cards
