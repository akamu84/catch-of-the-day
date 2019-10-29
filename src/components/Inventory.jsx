import React from "react";
import AddFishForm from "./AddFishForm";

const Inventory = props => (
  <div className="inventory">
    <AddFishForm addFish={props.addFish} />
    <button onClick={props.loadSampleFishes}>Load Sample Fishes</button>
  </div>
);

export default Inventory;
