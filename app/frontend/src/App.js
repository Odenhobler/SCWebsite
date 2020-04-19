import React from "react";
//import axios from "axios";   seems to work without axios, axios is just needed in the components
import './App.css';

import Haydocboker from "./components/haydocboker.jsx";
import WriteLeagueTable from "./components/leagueTable.jsx";
import TestButton from "./components/button.jsx";

//MAIN FUNCTION
function App(){
return(
  <div className="App-header">
  <Haydocboker />
  <WriteLeagueTable />
  <TestButton />
  </div>
)
};

export default App;
