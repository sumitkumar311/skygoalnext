import React from "react";
import "./home.css";

const Home = () => {
  return (
    <>
      <div className="main">
        <div className="home">
          {/* nav Section */}
          <div className="navbar">
            <div className="nav">
              <div className="nav-right">
                <ul>
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Schedules</a>
                  </li>
                  <li>
                    <a href="#">Membership</a>
                  </li>
                  <li>
                    <a href="#">Pricing</a>
                  </li>
                </ul>
              </div>
              <div className="nav-left">
                <p>offer</p>
                <button>Courses</button>
              </div>
            </div>
          </div>
          {/* home-hero section */}
          <div className="hero">
            <div className="hero-right">
              <h3>Discover the beauty of the tropics</h3>
              <h1>
                <span>Tropical Destinations</span>
                For Student
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur. Sit mattis donec mi
                bibendum integer rutrum nisi. A nec nisl vitae{" "}
              </p>
              <div className="bt">
                <button>Sign up</button>
              </div>
            </div>
            <div className="hero-left">
              <img src="https://i.postimg.cc/QM9GGs9G/home.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
