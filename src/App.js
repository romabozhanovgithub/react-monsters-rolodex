import { Component } from 'react';
import './App.css';

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

  render() { // render() is called after constructor() and when state changes

    const filteredMonsters = this.state.monsters.filter(
      monster => monster.name.toLowerCase().includes(this.state.searchValue)
    );

    return (
      <div className="App">
        <input
          className="search-box"
          type="search"
          placeholder="Search monsters"
          onChange={(e) => {
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
          }}
        />
        {
          filteredMonsters.map(
            monster => <h1 key={monster.id}>{monster.name}</h1>
          )
        }
      </div>
    );
  }
}

export default App;
