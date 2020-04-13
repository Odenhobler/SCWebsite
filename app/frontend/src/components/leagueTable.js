import React from "react";
import axios from "axios";

var fred="felknlkdngd";



function askForTable() {
  axios
    .post("/sc_league/ask_for_table", 1)
    .then(res => {
      console.log(res.data.playerName);
      // alert(res.player_name)
      alert(res.data.eloNumber)
    })
};

function WriteLeagueTable(){
  axios
  .post("/sc_league/ask_for_table", 1)
  .then(res => {
    console.log(res.data.playerName);
    // alert(res.player_name)
    //alert(res.data.eloNumber)
    fred = res.data;
  })
  return(
    <div>
        <button onClick={askForTable}>realbutton</button>
      <table>
        <tr>
          <th>{fred}</th>
          <th>dummy2</th>
          <th>dummy3</th>
        </tr>
      </table>
    </div>
    )
};



export default WriteLeagueTable;