import React, { Component } from "react";
import Counters from "./counters";

class Counter extends Component {
  state = {
    count: 0,
    tags: []
  };

  style = {
    fontSize: 15,
    fontWeight: "bold"
  };

  /* constructor(){
            super();
            this.handleIncreament = this.handleIncreament.bind(this)

            {this.state.tags.length===0 &&   <p>Please create new Tags!</p>}
                        {this.getTags()}
      } */

  handleIncreament = () => {
    console.log("test", this);
    this.setState({
      count: this.state.count + 1
    });
  };

  render() {
    return (
      <div>
        <span style={this.style} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={this.handleIncreament}
          className="btn brn-secondary btn-sm"
        >
          Increament
        </button>
      </div>
    );
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
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
