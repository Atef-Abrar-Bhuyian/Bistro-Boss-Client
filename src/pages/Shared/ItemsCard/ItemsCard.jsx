import React from "react";
import slide5 from "../../../assets/home/slide5.jpg"
const ItemsCard = ({ image, heading, details }) => {
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure>
        <img
          src={slide5}
          alt={heading}
          className="rounded-xl w-full h-80"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{heading}</h2>
        <p>{details}</p>
        <div className="card-actions">
          <button className="btn text-yellow-600 border-0 border-b-2 border-white bg-transparent hover:border-b-2 hover:border-b-yellow-500">ADD TO CART</button>
        </div>
      </div>
    </div>
  );
};

export default ItemsCard;
