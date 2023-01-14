import { Component } from 'react';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          id: 1,
          name: "Frankenstein",
        },
        {
          id: 2,
          name: "Dracula",
        },
        {
          id: 3,
          name: "Zombie",
        }, 
      ]
    };
  }

  render() {
    return (
      // <p>
      //   Hello {this.state.name.first}{this.state.name.last}!
      // </p>
      // <button onClick={() => {
      //   // this.setState({
      //   //   name: { first: "React", last: "JSX" }
      //   // }); // This runs asynchronously
      //   // console.log(this.state); // This runs synchronously, so it will print the old state

      //   this.setState(
      //     (state, props) => { // state is equal to the current state
      //       return {
      //         name: { first: "React", last: "JSX" }
      //       }
      //     },
      //     () => { // This callback runs after the state is updated and optional
      //       console.log(this.state);
      //     }
      //   );
      // }}>
      //   Click Me!
      // </button>

      <div className="App">
        {
          this.state.monsters.map(
            monster => <h1 key={monster.id}>{monster.name}</h1>
          )
        }
      </div>
    );
  }
}

export default App;
