import React, { Component } from "react";
import { Route, Switch, Link, Redirect } from "react-router-dom";
import about from "../../components/pages/about";
import contact from "../../components/pages/contact";
import notfound from "../../components/pages/notfound";
import movieList from "../../components/movieList";

class Mainnav extends Component {
  pad = {
    padding: "0px 10px"
  };
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <Link
                className="nav-item active"
                style={this.pad}
                to="/movieList"
              >
                Home
              </Link>
              <Link className="nav-item" style={this.pad} to="/about">
                About
              </Link>
              <Link className="nav-item" style={this.pad} to="/contact">
                Contact
              </Link>
            </ul>
          </div>
        </nav>

        <div className="container">
          <Switch>
            <Route path="/about" component={about} />
            <Route path="/" component={movieList} />
            <Route path="/contact" component={contact} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default Mainnav;
