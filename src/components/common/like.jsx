import React, { Component } from "react";
import { getMovies } from "../../services/fakeMovieService";

class Likes extends Component {
  render() {
    return (
      <div style={{ coursor: "pointer" }} onClick={this.props.onClick}>
        {this.props.likeStatus ? "Like" : "UnLike"}
      </div>
    );
  }
}

export default Likes;
