import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  handleDelete = counterID => {
    const counters = this.state.counters.filter(c => c.id !== counterID);
    this.setState({ counters });
  };
  render() {
    return (
      <div>
        <button className="btn btn-primary btn-sm m-2" />
        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            value={counter.value}
            onDelete={this.handleDelete}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
