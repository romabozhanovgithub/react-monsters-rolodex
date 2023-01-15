import { Component } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css'; // css applied to entire project


class App extends Component {
  constructor() { // constructor() is called first, before render()
    super();

    this.state = {
      monsters: [],
      searchValue: "",
    };
  }

  componentDidMount() { // lifecycle method, called after render(), when component is mounted, it is called only once
    // componentDidMount() can be executed twice, because of <React.StrictMode> in index.js
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState(() => {
        return { monsters: users };
      },
      () => {
        console.log(this.state);
      }
    ));
  }

  handleSearchChange = (e) => {
    // Best practice is not to mutate state directly, but to create a copy of it
    // and then mutate the copy, and then set the state to the copy
    // This is because React may not be able to detect the change in state
    // This calls mutability
    const searchValue = e.target.value.toLocaleLowerCase();
    this.setState(() => {
        return { searchValue }; // ES6 syntax, same as { searchValue: searchValue }, setState updates the state
      },
      () => {
        console.log(this.state);
      }
    );
  }

  render() { // render() is called after constructor() and when state changes
    const { monsters, searchValue } = this.state; // ES6 destructuring
    const { handleSearchChange } = this; // This is the same as this.handleSearchChange.bind(this)
    // and this is done to reduce this keyword usage
    
    const filteredMonsters = monsters.filter(
      monster => monster.name.toLowerCase().includes(searchValue)
    );

    return (
      <div className="App">
        <h1 className="app-title">Monsters Rolodex</h1>
        <SearchBox
          className="monsters=search-box"
          placeholder="Search monsters"
          onChangeHandler={handleSearchChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
