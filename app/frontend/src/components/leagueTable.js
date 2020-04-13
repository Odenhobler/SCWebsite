import React from "react";
import axios from "axios";

function WriteLeagueTable(){
  return(
    <div>
      <table>
        <tr>
          <th>dummy</th>
          <th>dummy2</th>
          <th>dummy3</th>
        </tr>
      </table>
    </div>
    )
};

function askForTable() {
    axios
      .post("/sc_league/ask_for_table", 1)
      .then(res => {
        alert(res.data)
      })
  };


export default WriteLeagueTable;