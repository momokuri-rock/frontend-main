import React, { Component } from 'react';
import s from './Home.scss';

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
