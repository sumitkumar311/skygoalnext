import React from 'react'
import './home2.css'

const Home2cards = (props) => {
  return (
    <>
    <div className="card">
              <img
                src={props.img}
              />
              <div className="card-right">
                <h5>{props.name}</h5>
                <p>{props.description}</p>
              </div>
            </div>
      
    </>
  )
}

export default Home2cards
