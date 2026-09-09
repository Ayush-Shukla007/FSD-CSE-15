import React from "react";
import Item from "./Item";
import ItemStore from "./ItemStore";

const Home = () => {
  return (
    <div className="home">

      <h1>My Item Store</h1>

      <div className="items">

        {ItemStore.map((item, index) => (
          <Item
            key={index}
            image={item.image}
            title={item.title}
            price={item.price}
          />
        ))}

      </div>

    </div>
  );
};

export default Home;