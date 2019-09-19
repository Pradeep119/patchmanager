// import React, { Component } from 'react';
// import './styles.css';


// export default class AddUser extends Component {

//   constructor() {
//     super();
//     this.state = {
//       email: '',
//       password: ''
//     };
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(evt) {
//     // check it out: we get the evt.target.name (which will be either "email" or "password")
//     // and use it to target the key on our `state` object with the same name, using bracket syntax
//     this.setState({ [evt.target.name]: evt.target.value });
//   }


//   handleSubmit(event) {
//     alert('A name was submitted: ' + this.state.email + ' and password ' + this.state.password);
//     event.preventDefault();
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>

//         <label>Email</label>
//         <input type="text" name="email" onChange={this.handleChange} />

//         <label>Password</label>
//         <input type="password" name="password" onChange={this.handleChange} />


//         <select>
//           <option value="grapefruit">Grapefruit</option>
//           <option value="lime">Lime</option>
//           <option selected value="coconut">Coconut</option>
//           <option value="mango">Mango</option>
//         </select>


//         <input type="submit" value="Submit" />
//       </form>
//     );
//   }

// }


















import React, { Component } from 'react';
import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Button,
} from 'reactstrap';
import {postApi} from '../Api/Api'

import { Combobox } from 'react-widgets'
import "react-widgets/dist/css/react-widgets.css";

const users = [
  'admin', 'dev', 'tester'
]

class AddUser extends Component {



    constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      firstname: '',
      lastname: '',
      usertype:''
    };
    this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

    handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  handleChangeCombo = name => value => {
    this.setState({
       [name]: value,
     });
   };

  saveData(){

    this.saveUserData()

  }

  async saveUserData() {
    var url = 'http://localhost:8080/users/signup'
    var headers = { 'Content-Type': 'application/json', 'Authorization': localStorage.getItem('token') }
    var postbody = {
      "username":this.state.username,
      "password":this.state.password,
      "firstName":this.state.firstname,
      "lastName":this.state.lastname,
      "usertype":this.state.usertype
    }


    var data = await postApi(url, postbody, headers)

    if(data.status == 200){
      alert("data saved successfully")
    }
    
   
  }



  handleChange2 = name => value => {
    this.setState({
       [name]: value,
     });
   };
  
  render() {
    return (
      <div className="main" style={{ width: window.innerWidth / 2 }}>

        <h2>Add user</h2>
        <Form className="form" style={{ width: window.innerWidth / 2 }}>
          <Col>
            <FormGroup>
              <Label>User Name (Email)</Label>
              <Input
                type="email"
                name="username"
                id="username"
                name="username"
                // placeholder="myemail@email.com"
                onChange={this.handleChange}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label>Password</Label>
              <Input
                type="text"
                name="password"
                id="password"
                name="password"
                onChange={this.handleChange}
                // placeholder="********"
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label>First Name</Label>
              <Input
                type="text"
                name="firstname"
                id="firstname"
                name="firstname"
                onChange={this.handleChange}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label>Last Name</Label>
              <Input
                type="text"
                name="Last Name"
                id="lastname"
                name="lastname"
                onChange={this.handleChange}
              />
            </FormGroup>
          </Col>


          <Col>

          <Combobox
            data={users}
            name="usertype"
            defaultValue="admin"
            value={this.state.usertype}
            onChange={this.handleChange2('usertype')}
          />
          </Col>

     
        
        
        </Form>

        <div style={{ width: window.innerWidth / 2 }}>
          <Button onClick={() => this.saveData()}>Submit</Button>
          </div> 




      </div>
    );
  }
}

export default AddUser;
