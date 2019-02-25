import React, { Component } from "react";
import Counters from "./counters";

class Counter extends Component {
  style = {
    fontSize: 15,
    fontWeight: "bold"
  };

  render() {
    return (
      <div className="row">
        <div className="col-md-1">
          <span style={this.style} className={this.getBadgeClasses()}>
            {this.formatCount()}
          </span>
        </div>
        <div className="col-9">
          <button
            onClick={() => this.props.onIncreament(this.props.counter)}
            className="btn btn-primary btn-sm m-2"
          >
            +
          </button>
          <button
            onClick={() =>
              this.props.counter.value !== 0
                ? this.props.onDecreament(this.props.counter)
                : null
            }
            className={this.btnDisabled()}
          >
            -
          </button>
          <button
            className="btn btn-danger btn-sm m-2"
            onClick={() => this.props.onDelete(this.props.id)}
          >
            Delete
          </button>
        </div>
      </div>
    );
  }

  btnDisabled() {
    return this.props.counter.value === 0
      ? "btn btn-secondary disabled btn-sm m-2"
      : "btn btn-primary btn-sm m-2";
  }

  getTags() {
    if (this.state.tags.length === 0) return <p>No tags!</p>;
    return (
      <ul>
        {this.state.tags.map((item, i) => (
          <li key={item + i}>item</li>
        ))}
      </ul>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : this.props.counter.value;
  }
}

export default Counter;
