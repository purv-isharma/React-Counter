import React from "react";

class Counter extends React.Component {
  state = {
    counter: 0,
    userValue: 0
  };

  handleIncrement = () => {
    console.log("In Increment");
    console.log(typeof this.state.userValue);
    this.setState({
      counter: this.state.counter + parseInt(this.state.userValue)
    });
  };

  handleDecrement = () => {
    console.log("In Decrement");
    console.log(typeof this.state.userValue);
    this.setState({
      counter: this.state.counter - this.state.userValue
    });
  };

  handleInput = (event) => {
    this.setState({
      userValue: event.target.value
    });
    console.log(typeof event.target.value);
  };

  render() {
    return (
      <div>
        <h1>Hello</h1>
        <h3>{this.state.counter}</h3>
        <input
          type="number"
          placeholder="enter a value"
          onChange={this.handleInput}
        />
        <button onClick={this.handleIncrement}>Increment</button>
        <button onClick={this.handleDecrement}>Decrement</button>
      </div>
    );
  }
}

export default Counter;
