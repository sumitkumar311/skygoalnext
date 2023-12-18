import React from "react";
import "./home2.css";

const Home3card = (props) => {
  return (
    <>
      <div className="cards">
        <div className="cards-image" style={{backgroundImage: `url(${props.img})`}}>
          <button className="rating">
            <img src="https://i.postimg.cc/DwYKdCNx/star.png" />
            <p>4.8</p>
          </button>
          <button className="exclusive">Exclusive</button>
        </div>
        <div className="cards-body">
          <span>{props.heading} </span>
        </div>
        <div className="cards-footer">
          <span>{props.para}</span>
          <div className="icons">
            <div className="dot" />
            <div className="dot" />
            <div className="dot" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home3card;
