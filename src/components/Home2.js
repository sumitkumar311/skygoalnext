import React from "react";
import './home2.css'
import Home2cards from "./Home2cards";

const Home2 = () => {
    let carddetails = [{
        id: 1,
        img:"https://i.postimg.cc/sg9rySrY/1d145f53b603c083a4276a40cca2e5b4.png",
        name:"Jenny Wilson",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing..."
    },
    {
        id: 2,
        img:"https://s3-alpha-sig.figma.com/img/8829/84e5/13f1a16feb72a1cd0c2adc353bcb0bab?Expires=1703462400&Signature=feJLefHk-Re3GwC1q6mkFu5kMqamEgjoG0r6vOmhACHqpdRjVL1vXPn6~Be1G6k2zlwpnq5VsXoTKkLvdAnrUKauarNiAi83K01LU444YGXdvH8eVW5Q0Px4iVCp6-bMP68bhdLVqaK6mtwFq0xwaQXqoOSVZ4QXRlldZO5UaXWGMwgA9~TQZyBchcg6URdwLPpBG-PMNaf6bxibsdxerG~nt8TOpG4LkqCefm9uRfqzu46FLHt8lFWgvWvGM07D-7Cxo762tC28TGYQt0YmsPAW-M4FLMkVZdgP6PyiDSxoxqI89sHPruPQLsInmJq5jZHoL9Crk7Pm05emldKZ4g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        name:"Scarlet Johnson",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing..."
    },
    {
        id: 3,
        img:"https://s3-alpha-sig.figma.com/img/f746/c72f/c409607d63c3fde87ace043e53591dc3?Expires=1703462400&Signature=GfPGuUTjGxM7qxrzZ-uE6JlCkizXnCDKrcZUvuNLCoujT8Q4pKW9jzl2bTT-HEoJligM3SPerCM5aYVsu50Psk4re-JMb72ClClQwKrD-JY4U68SMOnBbbuYHLNDOjCEM2G6CPPv5oJVY49XVC6xEAVggsJtWwo5~iGOS-C9rsh2njLWJ05dTtnPxeHF81WfPWjUwaFPHExsUyTEZwzVJFfpQbAYpJGHk8mcwZ-KFx~NiLDobTBdjgsBJdU-Yz0-ltR46bolZOXsbmqGe7vF11k3d2rFhIA2PMgiiP0GncQsaXpl3pc3QzwekD7F2A8~Jl7Uu9sALjyrMSHLdquKDg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        name:"Elizabeth Olson",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing..."
    }]
  return (
    <>
      <div className="home2">
        <div className="homecenter">
          <div className="homecenter-right">
            {carddetails.map((elem) => <Home2cards key={elem.id} {...elem}/>)}
          </div>
          <div className="homecenter-left">
            <h3>
              Tropical Adventure <br />
              <span>for Students.</span>
            </h3>
            <p>Student Tropical Vacation: Relax and Recharge</p>
            <ul>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet.</li>
            </ul>
            <button>Explore More</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home2;
