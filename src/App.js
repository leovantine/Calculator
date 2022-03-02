import React, { Component } from "react";
import "./styles.css";
export default class Calculator extends Component {
  state = {
    n1: null,
    n2: null,
    result: null
  };

  plus = () => {
    this.setState({
      result: this.state.n1 + this.state.n2
    });
  };

  minus = () => {
    this.setState({
      result: this.state.n1 - this.state.n2
    });
  };

  mult = () => {
    this.setState({
      result: this.state.n1 * this.state.n2
    });
  };

  div = () => {
    this.setState({
      result: this.state.n1 / this.state.n2
    });
  };

  clear = () => {
    this.setState({
      n1: "",
      n2: "",
      result: null
    });
  };

  handleChangeN1 = (event) => {
    this.setState({
      n1: Number(event.target.value)
    });
  };

  handleChangeN2 = (event) => {
    this.setState({
      n2: Number(event.target.value)
    });
  };

  render() {
    let { result } = this.state;
    return (
      <div>
        <h1>React Calc App</h1>
        <h2>{result}</h2>

        <div class="writespace">
          <input
            placeholder="DIGITE"
            value={this.state.n1}
            onChange={this.handleChangeN1}
            type="number"
            name="numero1"
          />
          <input
            placeholder="DIGITE"
            value={this.state.n2}
            onChange={this.handleChangeN2}
            type="number"
            name="numero2"
          />
        </div>

        <div class="buttons">
          <button onClick={this.plus}> + </button>
          <button onClick={this.minus}> - </button>
          <button onClick={this.mult}> * </button>
          <button onClick={this.div}> / </button>
          <button onClick={this.clear}> C </button>
        </div>
      </div>
    );
  }
}
