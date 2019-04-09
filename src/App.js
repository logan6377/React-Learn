import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Counters from "./components/counters";
import Navbar from "./components/navbar";
import Mainnav from "./components/common/mainnav";
import MovieList from "./components/movieList";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 1 },
      { id: 2, value: 2 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  handleIncreament = counter => {
    console.log(this.state.counters, counter);
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDecreament = counter => {
    console.log(counter);
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
    this.setState({ counters });
  };

  handleDelete = counterID => {
    const counters = this.state.counters.filter(c => c.id !== counterID);
    this.setState({ counters: counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });

    this.setState({ counters });
  };

  render() {
    return (
      <div>
        <Mainnav />
        <Navbar
          totalNumber={this.state.counters.filter(c => c.value > 0).length}
        />
        <div className="container">
          <Counters
            onIncrement={this.handleIncreament}
            onDelete={this.handleDelete}
            onReset={this.handleReset}
            counters={this.state.counters}
            onDecreament={this.handleDecreament}
          />
        </div>
      </div>
    );
  }
}

export default App;
