import React from "react";
import loading from "./loading.gif";
const Spinner = () => {
  return (
    <div style={{"justifyContent":"center", "alignItems":"center"}}>
      <img src={loading} alt="loading image" className="text-center"/>
    </div>
  );
};

export default Spinner;
