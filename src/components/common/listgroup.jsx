import React, { Component } from "react";

class Listgroup extends Component {
  render() {
    const { genres, selectedItem } = this.props;
    console.log(genres, selectedItem);
    return (
      <div className="list-group">
        {genres.map(genre => (
          <a
            href="#"
            className={
              genre === selectedItem
                ? "list-group-item list-group-item-action active"
                : "list-group-item list-group-item-action"
            }
            key={genre._id}
            onClick={() => this.props.moviesGenre(genre)}
          >
            {genre.name}
          </a>
        ))}
      </div>
    );
  }
}

export default Listgroup;
