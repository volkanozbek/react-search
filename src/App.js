import "./App.css";
import { Component } from "react";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => console.log(response))
      .then((users) => console.log(users));
  }

  render() {
    return (
      <div className="App">
        {this.state.monsters.map((monster) => {
          return <div>{monster.name}</div>;
        })}
      </div>
    );
  }
}

export default App;
