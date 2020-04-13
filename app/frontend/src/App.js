import React from "react";
//import axios from "axios";   seems to work without axios, axios is just needed in the components
import './App.css';

import Haydocboker from "./components/haydocboker";
import ButtonShowTable from "./components/buttonShowTable";

//MAIN FUNCTION
function App(){
return(
  <div className="App-header">
  <Haydocboker />
  <ButtonShowTable />
  </div>
)
};

export default App;
