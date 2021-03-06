import React from 'react';
import Nav from './components/navbar'
import Footer from './components/footer'
import Home from './components/home'
import About from './components/about'
import Projects from './components/projects'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/projects" component={Projects} />
          </Switch>
          <Footer />
        </Router>
      </header>
    </div>
  );
}

export default App;
