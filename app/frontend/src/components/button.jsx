import React from "react";
import axios from "axios";

function TestButton(){
  return(
    <div>
      <button onClick={makeDumbJoke}>test button</button>
    </div>
    )
};

function makeDumbJoke() {
  axios
    .post("/sc_league/produce_league_table", "")
    .then(res => {
      alert("backend hat was geschickt, siehe log")
      console.log(res.data);
    })
  //event.preventDefault(); this produced an error, no idea why it was used in the 
  //tutorial file in the first place though
};
  
export default TestButton;

