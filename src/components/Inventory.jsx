import React from "react";
import AddFishForm from "./AddFishForm";

const Inventory = props => (
  <div className="inventory">
    <AddFishForm addFish={props.addFish} />
  </div>
);

export default Inventory;
