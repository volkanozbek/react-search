import "./App.css";
import { Component } from "react";
import CardList from "./components/card-list/card-list.components";
import SearchBox from "./components/search-box/search-box.components";

class App extends Component {
  constructor() {
    super();

    this.state = {
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
            // console.log(this.state);
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
          <SearchBox onChangeHandler={onSearchChange} />
          <CardList monsters={filteredMonsters} />
        </div>
      </header>
    );
  }
}

export default App;

// {this.state.monsters.map((monster) => {
//   return <p>{monster.name}</p>;
// })}
