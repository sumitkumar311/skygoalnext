import React, { useState, useRef } from "react";
import "./home3.css";
import Home3card from "./Home3card";
import home3cards from "./home3cards.json";

const Home3 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardRef = useRef(null);

  const moveForward = () => {
    if (currentIndex < home3cards.length - 1) {
      setCurrentIndex(currentIndex + 1);
      scrollCard();
    }
  };

  const moveBackward = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      scrollCard();
    }
  };

  const scrollCard = () => {
    if (cardRef.current) {
      const cardWidth = cardRef.current.offsetWidth;
      cardRef.current.scrollTo({
        left: currentIndex * cardWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <div className="home3">
        <div className="section2">
          <h3 className="heading">Our Destinations</h3>
          <div className="home-cool" ref={cardRef}>
            {home3cards.map((elem) => (
              <Home3card key={elem.id} {...elem} />
            ))}
          </div>
          <div className="home3footer">
            <img
              src="https://i.postimg.cc/52NdL5Ks/left-arrow-svgrepo-com-1-1.png"
              onClick={moveBackward}
              className="backward"
              alt="Backward"
            />
            <p>
              {currentIndex + 1} <span>/ {home3cards.length}</span>
            </p>
            <img
              src="https://i.postimg.cc/ZKbDMbPR/left-arrow-svgrepo-com-1-2.png"
              onClick={moveForward}
              className="forward"
              alt="Forward"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home3;
