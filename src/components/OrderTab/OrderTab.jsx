import React from "react";
import ItemsCard from "../../pages/Shared/ItemsCard/ItemsCard";

const OrderTab = ({items}) => {
  return (
    <div>
      <div className="md:grid md:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <ItemsCard
            key={item._id}
            heading={item.name}
            details={item.recipe}
          ></ItemsCard>
        ))}
      </div>
    </div>
  );
};

export default OrderTab;
