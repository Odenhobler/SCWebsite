import React from "react";
//import axios from "axios";   seems to work without axios, axios is just needed in the components
import './App.css';

import Haydocboker from "./components/haydocboker";
import ButtonShowTable from "./components/buttonShowTable";
import WriteLeagueTable from "./components/leagueTable";

//MAIN FUNCTION
function App(){
return(
  <div className="App-header">
  <Haydocboker />
  <ButtonShowTable />
  <WriteLeagueTable />
  </div>
)
};

export default App;
