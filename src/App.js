import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'typeface-roboto';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
});




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
    return Number(p1) + Number(p2);
  }

  createmask (index) {
    if (index > 0)
    var mask = 0x01 << index-1
    else return "0";
    return mask;
  }

  bitflip (value, index) {
    var mask = this.createmask(index);
    var newval = value ^ mask;

    return newval;

  }
  

  render() {
    return (
      
      <div className="App">

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Bitflipper</h1>
        </header>
        <h2>Computersystemer 2018-2019</h2>


        <form onSubmit={this.handleSubmit}>
              <label>Number bitflip</label>
              <input 
                type="number" 
                value={this.state.inputvalue1} 
                onChange={(event) => this.handleChange(event, "inputvalue1")}
                />
              <br></br>
        </form>


        <form onSubmit={this.handleSubmit}>
        <label>Index of bit</label>
              <input 
                type="number" 
                value={this.state.inputvalue2} 
                onChange={(event) => this.handleChange(event, "inputvalue2")}
              />
        </form>

        <br></br>


        Base<sub>2</sub> representation of of base<sub>10</sub> input:
        <br></br>
        <b>{Number(this.state.inputvalue1).toString(2)}</b>

        <br></br><br></br>
        
        Mask to be used to bitflip:
        <br></br>
        <b>{Number(this.createmask(this.state.inputvalue2)).toString(2)}</b>

        <br></br><br></br>

        The new number in base<sub>10</sub>:
        <br></br>
        <b>{this.bitflip(this.state.inputvalue1, this.state.inputvalue2)}</b>
        
        <br></br><br></br>

        The new number in base<sub>2</sub>:
        <br></br>
        <b>{Number(this.bitflip(this.state.inputvalue1, this.state.inputvalue2)).toString(2)}</b>

    </div>     


    );
  }
}

export default App;
