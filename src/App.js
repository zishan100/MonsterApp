import React, { Component } from "react";
import "./component/CompList/CompList";
import "./App.css";

import { CardList } from "./component/CompList/CompList";
import { SearchBox } from "./component/SearchBox/search";
/* Here is Class Based Component to Pass Data Using State Property*/
class App extends Component {
  constructor() {
    super();
    this.state = {
      monster: [],
      search: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((user) => {
        this.setState({ monster: user });
      });
  }

  render() {
    const { monster, search } = this.state;

    const filterMonster = monster.filter((monster) => {
      return monster.name.toLowerCase().includes(search.toLowerCase());
    });
    return (
      <div className="App">
        <h1>Monster RoloDex</h1>
        <SearchBox
          placeholder="Search monster"
          SearchHandle={(e) => {
            this.setState({ search: e.target.value });
          }}
        />

        <CardList monster={filterMonster} />
      </div>
    );
  }
}

export default App;
