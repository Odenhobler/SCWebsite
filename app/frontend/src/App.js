import React, { Component } from "react";
import axios from "axios";
import './App.css';

//Not sure, but I suppose this is just the button
class App extends Component{
  constructor() {
    super();
    this.state = {
      url: '',
    }
this.handleSubmit = this.handleSubmit.bind(this);
}

handleSubmit(event) {
  axios
    .post("/sc_league/", this.state.url)
    .then(res => {
      alert(res.data)
    })
  event.preventDefault();
};
render() {
  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={this.handleSubmit}>
            <input type="submit" value="show database dummy" />
        </form>
      </header>
    </div>
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
