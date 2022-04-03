import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class 
 extends Component {
  render() {
    return (
      <div style={{display:'flex',background:'#1B1A17',padding:'0.5'}}>
        <Link to="/" style={{textDecoration:'none'}}>
        <h1 style={{marginTop:'1rem',marginLeft:'1rem',color:'white'}}>Movies App</h1>
        </Link>
        <Link to="/favourites" style={{textDecoration:'none'}}>
        <h2 style={{marginLeft:'2rem',marginTop:'1.5rem',color:'white'}}>Favourites</h2>
        </Link>
       
       
      </div>
    )
  }
}
