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






class OneInput  extends Component {
  onBtnClickHandler() {
    //alert(ReactDOM.findDOMNode(this.refs.myTestInput).value);
    alert('Kliknuli');
  }
  render() {
    return (
      <div>
        <input
          className='one-input'
          defaultValue=''
          placeholder='введите значение'
          ref='myTestInput'
        />
        <button onClick={this.onBtnClickHandler}>Добавить значение вар-1</button>
      </div>
    );
  }
}











class TestInput extends Component {
  constructor(props) {
    super(props);
    this.state = {myValue: ''};
  }
  onChangeHandler(e) {
    this.setState({myValue: e.target.value})
  }
  onBtnClickHandler() {
    alert(this.state.myValue);
  }
  render() {
    return (
      <div>
        <input
          className='test-input'
          value={this.state.myValue}
          onChange={this.onChangeHandler}
          placeholder='введите значение'
        />
        <button onClick={this.onBtnClickHandler}>Показать alert</button>
      </div>
    );
  }
}











class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    };
  }

  render() {
    return (
      //...
      <input value={this.state.inputValue} onChange={evt => this.updateInputValue(evt)}/>
      //...
    );
  }

  updateInputValue(evt) {
    this.setState({
      inputValue: evt.target.value
    });
  }
}











class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <OneInput />
        <TestInput />
        <MyComponent />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Footer />
      </div>
    );
  }
}

export default App;
