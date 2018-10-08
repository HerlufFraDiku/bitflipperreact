import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor (props) {
    super(props);
    this.state = {
        inputvalue1: '',
        inputvalue2: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}

  handleChange (event, valueName) {
    this.setState({
        [valueName] : event.target.value,
    })
  }
  
  handleSubmit (event) {

    console.log( this.state.inputvalue1 + this.state.inputvalue2 )
    event.preventDefault();
  }

  adder (p1, p2) {
    return p1 + p2;
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
              <input 
                type="number" 
                value={this.state.inputvalue1} 
                onChange={(event) => this.handleChange(event, "inputvalue1")}
                />
              <br></br>
        </form>


        <form onSubmit={this.handleSubmit}>
        <label>Second integer</label>
              <input 
                type="number" 
                value={this.state.inputvalue2} 
                onChange={(event) => this.handleChange(event, "inputvalue2")}
              />
              <br></br>

              <input type="submit" value="Submit"/>
        </form>

        <h4>The first number is {this.state.inputvalue1} and the second, {this.state.inputvalue2}.</h4>

        <br></br>

        <h4>The result of adding the two numbers will be {this.adder(inputvalue1, inputvalue2}</h4>

        


      </div>
    );
  }
}

export default App;
