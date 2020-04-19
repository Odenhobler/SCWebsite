import React, { useState } from "react";
import axios from "axios";

var player = {
  name: "Warum überschreibt er das nicht in Zeile 20?", // most likely because the DOM gets rendered before the request, even with JSX
  elo: "",
};

// try this: https://www.reddit.com/r/node/comments/9ude8j/how_do_i_wait_for_a_function_axios_to_complete/

function WriteLeagueTable(){
  // axios
  //   .get("/sc_league/ask_for_table", 1)
  //   .then(res => {
  //     console.log(res.data);
  //     console.log(res.data.playerName);
  //     console.log(res.data.eloNumber);
  //     player.name = res.data.playerName;
  //   })
  // console.log(player.name); 

  const [isRed, setRed] = useState(false);
  const [count, setCount] = useState(0);

  const incr = () => {
    setCount (count + 1);
  }
  // https://www.youtube.com/watch?v=dGcsHMXbSOA&t=770s //currently at 35:19

  return(
    <div>
      <button onClick={incr}>Increment</button>
      <p>{count}</p>
      {/* <p>{player.name} ahja, weil er zuerst rendert</p> */}
    </div>
    )
};

export default WriteLeagueTable;