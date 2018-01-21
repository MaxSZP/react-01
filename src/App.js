import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class Header extends Component {
  render() {
    return (
        <header className="App-header">
            <h1>Its a first React app - Header</h1>
        </header>
    );
  }
}

class Footer extends Component {
  render() {
    return (
        <footer className="App-footer">
            <h5>Its a first React app - Footer</h5>
        </footer>
    );
  }
}


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Footer />
      </div>
    );
  }
}

export default App;
