import "./App.css";
import { Component } from "react";

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: { firstName: "AA", lastName: "VV" },
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
          <h1 className="App-link">test</h1>
          <p> {this.state.name.firstName} </p>
          <p> {this.state.name.lastName} </p>
          <button
            onClick={() => {
              this.setState(
                () => {
                  return {
                    name: { firstName: "Volkan", lastName: "Özbek" },
                  };
                },
                () => {
                  console.log(this.state);
                }
              );
            }}
          >
            test
          </button>
        </div>
      </header>
    );
  }
}

export default App;

// {this.state.monsters.map((monster) => {
//   return <p>{monster.name}</p>;
// })}
