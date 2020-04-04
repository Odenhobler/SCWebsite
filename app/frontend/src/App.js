import React, { Component } from "react";
import axios from "axios";
import './App.css';

class App extends Component{
  constructor() {
    super();
    this.state = {
      url: '',
    }
this.handleSubmit = this.handleSubmit.bind(this);
this.handleChange = this.handleChange.bind(this);
}

handleChange(event) {
  this.setState({url: event.target.value})
}
handleSubmit(event) {
  axios
    .post("/url_checker", this.state.url)
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
          <label>
              url:
              <input type="text" name="url" value={this.state.url} onChange={this.handleChange} />
          </label>
            <input type="submit" value="Check URL" />
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
