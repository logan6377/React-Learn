import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const {
      onDelete,
      onIncrement,
      onReset,
      counters,
      onDecreament
    } = this.props;
    return (
      <div>
        <button className="btn btn-primary btn-sm m-2" onClick={onReset}>
          Reset
        </button>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            value={counter.value}
            id={counter.id}
            counter={counter}
            onIncreament={onIncrement}
            onDelete={onDelete}
            onDecreament={onDecreament}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
