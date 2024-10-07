import { Component } from "react";

type CounterProps = {
  message: string; // Prop type: string
};

type CounterState = {
  count: number;
};

export class Counter extends Component<CounterProps, CounterState> {
  state = {
    count: 0,
  };

  handleClick = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  render() {
    return (
      <div>
        <h1>I am Counter Component</h1>
        <p>Count : {this.state.count}</p>
        <button onClick={this.handleClick}>Click</button>
        <p>{this.props.message}</p>
      </div>
    );
  }
}
