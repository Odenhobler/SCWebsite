import React from "react";
import axios from "axios";

function ButtonShowTable(){
  return(
    <div>
      <button onClick={makeDumbJoke}>you can click here</button>
    </div>
    )
};

function makeDumbJoke() {
  alert ("but nothing will happen")
};
  


export default ButtonShowTable;