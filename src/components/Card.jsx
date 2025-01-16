import React from "react";
import "./Card.css";
import cart1 from "../assets/cart1.svg";
import stars from "../assets/stars.svg";

export default function Card(prop) {
  return (
    <div className="card">
      <div className="card-header">
        {prop.aksiya && <h2 className="h2">-35%</h2>}
        <img src={prop.img} alt="" />
        <button>
          <img style={{ width: "30px" }} src={cart1} alt="Add To Cartalt" />
          Add To Cart
        </button>
      </div>

      <div className="card-body">
        <h3>{prop.name}</h3>
        <div className="price">
          <p className="orange">${prop.price}</p>
          {prop.aksiya && <p className="gray">$1160</p>}
        </div>

        <div className="stars">
          <img src={stars} alt="" />
          <p>({prop.reting})</p>
        </div>
      </div>
    </div>
  );
}
