import "./App.css";
import { Component } from "react";

class App extends Component {
  constructor() {
    super();

    this.state = {
      // monster: [{ name: "AA1" }, { name: "BB2" }, { name: "CC3" }],
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
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

  onSearchChange = (event) => {
    const searchBox = event.target.value;
    const searchField = searchBox.toLocaleLowerCase();
    this.setState(() => {
      return { searchField };
    });
  };

  render() {
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    return (
      <header className="App-header">
        <div className="App">
          <input
            className="search-box"
            type="search"
            placeholder="search monsters"
            onChange={onSearchChange}
          ></input>
          {filteredMonsters.map((m) => {
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
