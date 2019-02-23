import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService'

class MovieList extends Component {
      state = { 
            movies: getMovies(),
            category:['Title', 'Genre', 'Stock', 'Rate', '']
      } 
      
      deleteMovie = movie =>{  
            const movies = this.state.movies.filter(m => m._id !== movie );
            this.setState({ movies });
      }
      
      render() { 

            const { length:count } = this.state.movies
            

            if(count===0) return <div>There is no Movie in data base</div> 

            return (  

                  <div>
                        <h3>Showing {count} movies in the database.</h3> 
                        <table className="table">
                              <thead>
                                    <tr>{this.state.category.map( (value) => <th key={value} >{value}</th>)}</tr>
                              </thead>
                              <tbody>
                                    {this.state.movies.map( (value, index) => <tr key={value._id}><td >{value.title}</td><td >{value.genre.name}</td><td >{value.numberInStock}</td><td >{value.dailyRentalRate}</td><td ><button  className="btn btn-danger" onClick={ () => this.deleteMovie(value._id)}>Delete</button></td></tr>)}
                              </tbody>
                        </table> 
                  </div> 
            );
      }
}
 
export default MovieList;