import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

//import ApiRequester from './utility/ApiRequester.js';
import Home  from './components/Home.js';
import About from './components/About.js';
import Dojin from './components/Dojin.js';
import Blog  from './components/Blog.js';
import Bonus from './components/Bonus.js';
import Contact from './components/Contact.js';


//import s from './App.css';
class App extends Component {
  render(){
    return(
      <BrowserRouter>
        <div className={'main'} >
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/dojin'>Dojin</Link></li>
            <li><Link to='/blog'>Blog</Link></li>
            <li><Link to='/bonus'>Bonus</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
          </ul>

          <hr />

          <Route exact path='/' component={Home} />
          <Route path='/about'  component={About} />
          <Route path='/dojin'  component={Dojin} />
          <Route path='/blog'   component={Blog} />
          <Route path='/bonus'  component={Bonus} />
          <Route path='/contact'component={Contact} />
        </div>
      </BrowserRouter>
    );
  }
}




export default App;
