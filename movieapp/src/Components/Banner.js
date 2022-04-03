// import {movies} from './getMovies';

import React, { Component } from 'react'

import axios from 'axios';
import { movies } from './getMovies';

export default class Banner extends Component {
   constructor(){
     super();
     this.state={
       movies:{}
     }
   }
   async componentDidMount(){
    const res= await axios.get(`
    https://api.themoviedb.org/3/movie/popular?api_key=beaf497f1fba9b17bc527359fe787a06&language=en-US&page=${this.state.currPage}`);
    let data=res.data.results[0]
    this.setState({
      movies:data
    })
   }


  render() {
    let movie =this.state.movies;

    return (
      <>
      {
        movie==''?
        <div className="spinner-border text-primary" role="status">
  <span class="visually-hidden">Loading...</span>
</div> :
         <div className="card banner-card" >
         <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}  alt={movie.title} className="card-img-top banner-img"/>
         {/* <div className="card-body"> */}
           <h1 className="card-title banner-title">{movie.original_title}</h1>
           <p class="card-text banner-text">{movie.overview}</p>
           {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
         {/* </div>  */}
       </div>
      }
     
</>
    )
  }
}
