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
    const allgenre = [{ name: "All Genres" }, ...getGenres()];
    this.setState({
      movies: getMovies(),
      list: allgenre
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
    this.setState({ selectedGenres: gen, currentPage: 1 });
  };

  render() {
    const {
      pageSize,
      currentPage,
      selectedGenres,
      movies: allMovies
    } = this.state;
    const { length: count } = this.state.movies;

    if (count === 0) return <div>There is no Movie in data base</div>;
    const filtered =
      selectedGenres && selectedGenres._id
        ? allMovies.filter(m => m.genre._id === selectedGenres._id)
        : allMovies;
    const movies = pagenate(filtered, currentPage, pageSize);

    return (
      <div className="container p-2">
        <div className="row">
          <div className="col-md-2">
            <Listgroup
              genres={this.state.list}
              moviesGenre={this.handleGenres}
              selectedItem={this.state.selectedGenres}
            />
          </div>
          <div className="col-md-10">
            <h3 style={{ padding: "10px 10px", fontSize: 22 }}>
              Showing {filtered.length} movies in the database.
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
              itemCount={filtered.length}
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
