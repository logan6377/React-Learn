import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counters from './components/counters';
import MovieList from './components/movieList';

class App extends Component {

      constructor(props){
            super(props)

            /* const first = { name: "Log"}
            const second = { job: 'FED', arun:{age:27,role:'fed'}}
            const ar = [1,2,3]
            const comb = {...first, ...second, ...[ar]}

            console.log(comb) */
      }

      state = {title:"React App"}

       

      render() { 
            return (
                  <div className="container"> 
                        <Counters />
                  </div>
            );
      }
} 

export default App;
