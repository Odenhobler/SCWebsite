import React from "react";
import axios from "axios";

function writeLeagueTable(){
  return(
    <div>
      <table></table>
    </div>
    )
};

function makeDumbJoke() {
  axios
    .post("/sc_league/blabla", "")
    .then(res => {
      alert(res.data)
    })
  //event.preventDefault(); this produced an error, no idea why it was used in the 
  //tutorial file in the first place though
};
  
export default ButtonShowTable;