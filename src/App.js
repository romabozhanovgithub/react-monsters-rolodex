import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: {
        first: "React",
        last: "JS"
      }
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hello {this.state.name.first}{this.state.name.last}!
          </p>
          <button onClick={() => {
            // this.setState({
            //   name: { first: "React", last: "JSX" }
            // }); // This runs asynchronously
            // console.log(this.state); // This runs synchronously, so it will print the old state

            this.setState(
              (state, props) => { // state is equal to the current state
                return {
                  name: { first: "React", last: "JSX" }
                }
              },
              () => { // This callback runs after the state is updated and optional
                console.log(this.state);
              }
            );
          }}>
            Click Me!
          </button>
        </header>
      </div>
    );
  }
}

export default App;
