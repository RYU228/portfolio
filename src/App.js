import React, {Component} from 'react';
import './App.css';
import {HashRouter, Route} from 'react-router-dom';
import About from './About/About';
import Navigation from './Navigation/Navigation';
import Project from './Project/Project';
import Contact from './Contact/Contact';
import Header from './Header/Header';

class App extends Component {
  render() {
    return (
      <div className="app_container">
        <HashRouter>
          <Header />
          <Navigation />
          <Route exact path="/" component={About} />
          <Route path="/Project" component={Project} />
          <Route path="/Contact" component={Contact} />
        </HashRouter>
      </div>
    )
  }
}

export default App;
