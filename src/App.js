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
            this.setState({ name: { first: "React", last: "JSX" } });
            console.log(this.state);
          }}>
            Click Me!
          </button>
        </header>
      </div>
    );
  }
}

export default App;
