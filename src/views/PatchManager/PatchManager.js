import React, { Component } from 'react';
import './styles.css';
import axios from 'axios';


export default class PatchManager extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dataarray: 0,
    };
  }

//   async componentDidMount() {

//     var headersparam = { 'Content-Type': 'application/json', 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhbGV4QGFwaWdhdGUuY29tIiwic2NvcGVzIjpbeyJhdXRob3JpdHkiOiJST0xFX0FETUlOIn1dLCJpc3MiOiJodHRwOi8vZGV2Z2xhbi5jb20iLCJpYXQiOjE1Njg3NDY5OTAsImV4cCI6MTU2ODc2NDk5MH0.vCKW5vU7rtLCQkLnl2yqIezKawuLkwQSRt7oWwYmITE' } 


//     const response = await axios.post(
//       'http://localhost:8080/token/generate-token',
//       {
//         "username":"alex@apigate.com",
//         "password":"alex123"
//       },
//       { headers: headersparam }
//     )
//     console.log(response.data)

//     var obj= response.data

//     var token = obj.result.token
//     var username = obj.result.username


//     localStorage.setItem('token' , token)
//     console.log("token is",token)
//     console.log("username is",username)
  
// }


  render() {
    return (
      
      <div className="App">
        
        
        <div className="App-header">
        <h1 > Patch Manager</h1>
        </div>

        <p className="App-intro">
          Im patchManager <code>src/App.js</code> and save to reload.
          
        </p>

    </div>

    );
  }
}


