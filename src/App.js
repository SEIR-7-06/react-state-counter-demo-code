import React from 'react';
import './App.css';

// Activity
// Have the Increment button increase the value of count on the page.

class App extends React.Component {
  state = {
    count: 0,
    lightsOn: true
  }

  handleDecrementClick = () => {
    // Decrease the count by one only if it is not already 0
    if (this.state.count !== 0) {
      this.setState({ count: this.state.count - 1 });
    }
  }

  handleIncrementClick = () => {
    // Increase the count by one
    this.setState({ count: this.state.count + 1 });
  }

  handleLightsClick = () => {
    // Update lightsOn to the opposite of whatever it was before
    this.setState({ lightsOn: !this.state.lightsOn })
  }

  render() {
    const pageStyles = {
      backgroundColor: this.state.lightsOn ? 'white' : 'black',
      color: this.state.lightsOn ? 'black' : 'white',
      height: '100vh'
    }

    return (
      <div className="App" style={pageStyles}>
        <h1>Counter App</h1>
  
        <p>Count: {this.state.count}</p>

        <p>{this.state.lightsOn ? 'Lights Are On' : 'Lights Are Off'}</p>
  
        <button onClick={this.handleDecrementClick}>Decrement -</button>
        <button onClick={this.handleIncrementClick}>Increment +</button>

        <button onClick={this.handleLightsClick}>
          {this.state.lightsOn ? 'Turn Lights Off' : 'Turn Lights On'}
        </button>
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