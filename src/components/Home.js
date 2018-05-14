import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import s from './Home.css';
console.log(s)

class Home extends Component {
  render(){
    return(
      <div className={s.main}>
        <h2>Home</h2>
        <p>Welcome to Momokuri-Rock</p>
      </div>
    );
  }
}

export default Home;
