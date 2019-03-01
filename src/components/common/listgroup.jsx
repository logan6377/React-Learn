import React, { Component } from "react";

class Listgroup extends Component {
  render() {
    const { genres } = this.props;
    //console.log(genres);
    return (
      <div className="list-group">
        <a href="#" className="list-group-item list-group-item-action active">
          All Genres
        </a>
        {genres.map(genre => (
          <a
            href="#"
            className="list-group-item list-group-item-action"
            key={genre._id}
            onClick={() => this.props.moviesGenre(genre._id)}
          >
            {genre.name}
          </a>
        ))}
      </div>
    );
  }
}

export default Listgroup;
