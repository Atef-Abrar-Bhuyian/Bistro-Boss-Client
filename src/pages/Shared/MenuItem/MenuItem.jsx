import React from "react";

const MenuItem = ({ item }) => {
  const { image, name, price, recipe } = item;
  return (
    <div className="flex space-x-2">
      <img className="w-[100px] rounded-full rounded-tl-none" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlMyzfmXp2bWMGCMLw2JC4uXpXR1qEGTCBvw&s"} alt="" />
      <div>
        <h3 className="uppercase">{name} ---------------</h3>
        <p>{recipe}</p>
      </div>
      <p className="text-yellow-500">${price}</p>
    </div>
  );
};

export default MenuItem;
