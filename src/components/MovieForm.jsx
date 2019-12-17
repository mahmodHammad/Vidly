import React, { Component } from 'react';
import { getMovie } from "../services/fakeMovieService";
import AddMovie from "./AddMovie";


class MovieForm extends Component {
    // state = {  }
    // componentDidMount(){

    //     const movie=getMovie(this.props.match.params.id)
    //     this.setState()
    //     console.log(movie)
    // }
    render() { 
        const {match,history} = this.props
            return (
                <div>
                  <h1>
                    MovieForm
                    <span className="badge badge-danger">{match.params.id}</span>
                  </h1>
                  <AddMovie data={getMovie(this.props.match.params.id)} history={history}/>
                </div>
              );
            
          
    }
}

export default MovieForm;