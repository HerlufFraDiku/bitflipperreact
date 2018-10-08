import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor (props) {
    super(props);
    this.state = {
        inputvalue: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}

  handleChange (event) {
    this.setState({
        inputvalue: event.target.value
    })
  }
  
  handleSubmit (event) {
    console.log( 'Form Value : ' + this.state.inputvalue )
    event.preventDefault();
  }

  adder (p1, p2) {
    console.log( this.state.inputvalue + this.state.inputvalue)
    event.preventDefault();
  }
  

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          Tak, based Herluf.
        </p>

        <form onSubmit={this.handleSubmit}>
              <label>First integer</label>
              <input type="text" value={this.state.inputvalue} onChange={this.handleChange}/>
              <input type="submit" value="Submit"/>
        </form>

        


      </div>
    );
  }
}

export default App;
