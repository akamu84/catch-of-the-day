import React from "react";
import { getFunName } from "../helpers";

const StorePicker = () => {
  const goToStore = event => {
    event.preventDefault();
    console.log("Going to store");
  };

  return (
    <form className="store-selector" onSubmit={goToStore}>
      <h2>Please Enter A Store</h2>
      <input
        type="text"
        required
        placeholder="Store Name"
        defaultValue={getFunName()}
      />
      <button type="submit">Visit Store →</button>
    </form>
  );
};

export default StorePicker;
