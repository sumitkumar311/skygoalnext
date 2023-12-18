import React, { useState } from "react";

const Home5 = () => {
  const [starCount, setStarCount] = useState(4);
  const [roomCount, setRoomCount] = useState(4);

  const decreaseCount = (type) => {
    if (type === "star" && starCount > 0) {
      setStarCount(starCount - 1);
    } else if (type === "room" && roomCount > 0) {
      setRoomCount(roomCount - 1);
    }
  };

  const increaseCount = (type) => {
    if (type === "star") {
      setStarCount(starCount + 1);
    } else if (type === "room") {
      setRoomCount(roomCount + 1);
    }
  };

  return (
    <>
      <div className="home5">
        <div className="section5">
          <div className="home5left">
            <img
              src="https://i.postimg.cc/xj42hrPm/group-167-2x.png"
              alt="Group"
            />
          </div>
          <div className="home5right">
            <div className="box">
              <div className="box-top">
                <h3>Book now</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              </div>
              <div className="box-body">
                <>
                  <div className="box-body1">
                    <p>CITY</p>
                    <input type="text" placeholder="Placehoder" />
                  </div>
                  <div className="box-body2">
                    <div className="box-body2-1">
                      <p>Arrival</p>
                      <input type="text" placeholder="10 October" />
                    </div>
                    <div className="box-body2-1" style={{ marginBottom: 18 }}>
                      <p>Departure</p>
                      <input type="text" placeholder="11 October" />
                    </div>
                  </div>
                </>

                <div className="box-body2">
                  <div className="box-body2-1">
                    <p>Star</p>
                    <div className="body-2-1-1">
                      <div
                        className="box22"
                        onClick={() => decreaseCount("star")}
                      >
                        <div className="img" />
                      </div>
                      <span className="text">{starCount}</span>
                      <div
                        className="wrapper"
                        onClick={() => increaseCount("star")}
                      >
                        <div className="img-2" />
                      </div>
                    </div>
                  </div>
                  <div className="box-body2-1">
                    <p>ROOM</p>
                    <div className="body-2-1-1">
                      <div
                        className="box22"
                        onClick={() => decreaseCount("room")}
                      >
                        <div className="img" />
                      </div>
                      <span className="text">{roomCount}</span>
                      <div
                        className="wrapper"
                        onClick={() => increaseCount("room")}
                      >
                        <div className="img-2" />
                      </div>
                    </div>
                  </div>
                </div>
                {/* ... (your existing JSX code) */}
              </div>
              <div className="box-bottom">
                <button>BOOK NOW</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home5;
