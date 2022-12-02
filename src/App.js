import "./App.css";
import { Component } from "react";

class App extends Component {
  constructor() {
    super();

    this.state = {
      // monster: [{ name: "AA1" }, { name: "BB2" }, { name: "CC3" }],
      monsters: [],
    };
    console.log("constructor");
  }

  componentDidMount() {
    console.log("componentDidMount");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users };
          },
          () => {
            console.log(this.state);
          }
        )
      );
  }

  render() {
    console.log("render");
    return (
      <header className="App-header">
        <div className="App">
          {this.state.monsters.map((m) => {
            return (
              <div key={m.name}>
                <h1>{m.name}</h1>
              </div>
            );
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
