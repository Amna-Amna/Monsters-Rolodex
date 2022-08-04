import { Component } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/seach-box/search-box.component";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchString: "",
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
    console.log(event.target.value);
    const searchString = event.target.value.toLocaleLowerCase();

    this.setState(() => {
      return { searchString };
    });
  };

  render() {
    console.log("render from App.js");
    const { monsters, searchString } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchString);
    });

    return (
      <div className="App">
        <SearchBox
          className="monsters-search-box"
          onChangeHandler={onSearchChange}
          placeholder="search Monsters"
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
