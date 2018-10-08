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

  handleChange (event, inputvalue) {
    this.setState({
        [inputvalue] : event.target.value,
    })
  }
  
  handleSubmit (event) {

    console.log( this.state.inputvalue1 + this.state.inputvalue2 )
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
              <input type="number" value={this.state.inputvalue1} onChange={this.handleChange(event, "inputvalue1")}/>
              <br></br>
        </form>
        <form onSubmit={this.handleSubmit}>
        <label>Second integer</label>
              <input name="inputvalue2" type="number" value={this.state.inputvalue2} onChange={this.handleChange(event, inputvalue2)}/>
              <br></br>
              <input type="submit" value="Submit"/>
        </form>

        <h4>The result is {this.state.inputvalue1} and {this.state.inputvalue2}</h4>
        


      </div>
    );
  }
}

export default App;
