import React, { Component } from "react";
import axios from "axios";
import './App.css';

//Not sure, but I suppose this is just the button
class App extends Component{
  constructor() {
    super();
    /*this.state = {
      url: '',
    }*/               //ok I THINK this might just set the variable to zero which can then be altered and passed via POST
this.createDatabaseEntry = this.createDatabaseEntry.bind(this);
}

createDatabaseEntry(event) {
  let playerA = prompt("Player A?");
  let playerB = prompt("Player B?");
  let charA = prompt("charA?");
  let charB = prompt("charB?");
  let wonsetsA = prompt("WonsetsA?");
  let wonsetsB = prompt("wonsets B?")
  axios
    .post("/sc_league/", "Das ist das POST-Objekt")
    .then(res => {
      alert(res.data)
    })
  event.preventDefault();
};

// I think the actual html fully belongs here, not sure why they put everything 
//in the header without body though, especially why within a div 
//--> BECAUSE THIS IS THE ROOT-DIV WHICH IS IN THE BODY OF THE SERVED PUBLIC/INDEX.HTML. 
//Maybe see this: https://reactjs.org/docs/fragments.html
render() {
  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={this.createDatabaseEntry}>
            <input type="submit" value="show database dummy" />
        </form>
      </header>
    </div>
    /*<div>
      <body>
        <p>blabla</p>
      </body>
    </div>*/
  );
}
}
export default App;

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. Hallodocboker.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

//Backup from Version before applying tutorial, added everything after the imports

*/
