import React, { Component } from 'react';
import './styles.css';


export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
 
    } 
  }

  render() {

     
    return (
      <div className="App">
        
        
        <div className="App-header">
        <h1 > Patch Manager</h1>
        </div>

        <p className="App-intro">
          Im Homee <code>src/App.js</code> and save to reload.
        </p>
    </div>

    );
  }
}

