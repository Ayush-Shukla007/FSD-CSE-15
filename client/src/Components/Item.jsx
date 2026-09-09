import React from "react";

const Item = ({ image, title, price }) => {
  return (
    <div className="item">

      <img src={image} alt={title} />

      <h2>{title}</h2>

      <h3>₹{price}</h3>

      <button>Add to Cart</button>

    </div>
  );
};

export default Item;