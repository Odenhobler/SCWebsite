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
  axios
    .post("/sc_league/", "Das ist das POST-Objekt")
    .then(res => {
      alert(res.data)
    })
};
  
export default ButtonShowTable;

/*
  axios
    .post("/sc_league/", "Das ist das POST-Objekt")
    .then(res => {
      alert(res.data)
    })
  event.preventDefault();
};*/