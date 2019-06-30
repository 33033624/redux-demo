import React, { Component } from "react";

class Counter extends Component {
  onChange(e) {
    const value = e.target.value;
    // this.props.store.dispatch({
    //   type: "CHANGE",
    //   value: value ? Number(value) : value
    // });
    this.props.decrease({
      type: "CHANGE",
      value: value ? Number(value) : value
    });
  }
  decrease() {
    console.log("执行decrease事件了");
    // this.props.store.dispatch({
    //   type: "DECREASE"
    // });
    this.props.decrease({
      type: "DECREASE"
    });
  }
  increase() {
    console.log("执行decrease事件了");
    // this.props.store.dispatch({
    //   type: "INCREASE"
    // });
    this.props.decrease({
      type: "INCREASE"
    });
  }
  render() {
    const { count } = this.props.state;
    return (
      <div>
        <span>count值为：</span>
        <button onClick={() => this.decrease()}>-</button>
        <input type="number" value={count} onChange={e => this.onChange(e)} />
        <button onClick={() => this.increase()}>+</button>
      </div>
    );
  }
}

export default Counter;
