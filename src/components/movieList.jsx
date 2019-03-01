import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import Likes from "./common/like";
import Pagenation from "./common/pagenation";
import { pagenate } from "../utile/pagenate";
import Listgroup from "../components/common/listgroup";

class MovieList extends Component {
  state = {
    movies: [],
    list: [],
    pageSize: 4,
    currentPage: 1,
    category: ["Title", "Genre", "Stock", "Rate", "Likes", ""]
  };

  componentDidMount() {
    this.setState({
      movies: getMovies(),
      list: getGenres()
    });
  }

  deleteMovie = movie => {
    const movies = this.state.movies.filter(m => m._id !== movie);
    this.setState({ movies });
  };

  handleLike = movie => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index].likes = !movies[index].likes;
    this.setState({ movies });
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  handleGenres = gen => {
    const movies = this.state.movies.filter(m => m.genre._id === gen);
    this.setState({ movies });
  };

  render() {
    const { pageSize, currentPage, movies: allMovies } = this.state;
    const { length: count } = this.state.movies;

    if (count === 0) return <div>There is no Movie in data base</div>;

    const movies = pagenate(allMovies, currentPage, pageSize);

    return (
      <div className="container p-2">
        <div className="row">
          <div className="col-md-2">
            <Listgroup
              genres={this.state.list}
              moviesGenre={this.handleGenres}
            />
          </div>
          <div className="col-md-10">
            <h3 style={{ padding: "10px 10px", fontSize: 22 }}>
              Showing {count} movies in the database.
            </h3>
            <table className="table">
              <thead>
                <tr>
                  {this.state.category.map(value => (
                    <th key={value}>{value}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {movies.map((value, index) => (
                  <tr key={value._id}>
                    <td>{value.title}</td>
                    <td>{value.genre.name}</td>
                    <td>{value.numberInStock}</td>
                    <td>{value.dailyRentalRate}</td>
                    <td>
                      <Likes
                        likeStatus={value.likes}
                        onClick={() => this.handleLike(value)}
                      />
                    </td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => this.deleteMovie(value._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <Pagenation
              itemCount={count}
              pageSize={pageSize}
              currentPage={currentPage}
              onPageChange={this.handlePageChange}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default MovieList;
