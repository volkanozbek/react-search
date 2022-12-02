import "./App.css";
import { Component } from "react";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monster: [{ name: "AA1" }, { name: "BB2" }, { name: "CC3" }],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => console.log(response))
      .then((users) => console.log(users));
  }

  render() {
    return (
      <header className="App-header">
        <div className="App">
          {this.state.monster.map((m) => {
            return <h1>{m.name}</h1>;
          })}
        </div>
      </header>
    );
  }
}

export default App;

// {this.state.monsters.map((monster) => {
//   return <p>{monster.name}</p>;
// })}
