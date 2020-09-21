import React from 'react';
import Nav from './components/navbar'
import Home from './components/home.js'
import About from './components/about.js'
import Projects from './components/projects.js'
import Contact from './components/contact.js'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Nav />
          <Switch>
            <Route path="/home" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/projects" exact component={Projects} />
            <Route path="/contact" exact component={Contact} />
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
