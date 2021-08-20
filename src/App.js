import React from 'react';
import './App.css';

// Activity
// Have the Increment button increase the value of count on the page.

class App extends React.Component {
  state = {
    count: 0
  }

  handleDecrementClick = () => {
    // TODO: Update the count in state
    // Set the value of count to the current value - 1

    if (this.state.count !== 0) {
      this.setState({ count: this.state.count - 1 });
    }
  }

  handleIncrementClick = () => {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div className="App">
        <h1>Counter App</h1>
  
        <p>Count: {this.state.count}</p>
  
        <button onClick={this.handleDecrementClick}>Decrement -</button>
        <button onClick={this.handleIncrementClick}>Increment +</button>
      </div>
    );
  }
}

export default App;
































// Example of different ways to write a function
// function myFunc() {
//   console.log('Hello');
// }

// const myFunc = function() {
//   console.log('Hello');
// }

// const myFunc = () => {
//   console.log('Hello');
// }

// const myFunc = () => console.log('Hello');

// myFunc();